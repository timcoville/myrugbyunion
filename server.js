const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const SocketIO = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const braintree = require('braintree');
const EventEmitter = require('events')

class MyEmiter extends EventEmitter {}

const myEmiter = new MyEmiter()

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   '25ppsgy5vqd8jkxd',
    publicKey:    'g9b9vmf2z49ybz5p',
    privateKey:   'a4048c1ca07a05d1c147461b53468d32'
});

mongoose.connect('mongodb://localhost/rugby');

require('mongoose-type-email');

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public/dist/ang-sockets')));

var EventSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    type: {type: String, required: true},
    startTime: {type: Date, required: true},
    location: {type: String, required: true, minlength: 5},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zip: {type: String, required: true}
    },
    attending: []
}, {timestamps: true});


var UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: [true, "First Name required"],
        minlength: [3, "First Name needs to be longer than 3 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name required"],
        minlength: [3, "Last Name needs to be longer than 3 characters"]
    },
    email: {type: mongoose.SchemaTypes.Email, required: [true, "Email required"]},
    password: {type: String, required: [true, "Password required"]},
    position: String,
    height: {
        feet: Number,
        inches: Number
    },
    weight: Number,
    dob: String,
    payments: [],
    completed: false,
    authority: {
        type: Number,
        required: true,
        default: 0
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema)
const Event = mongoose.model('Event', EventSchema)

connections = {};


app.get("/client_token", function (req, res) {
    gateway.clientToken.generate({}, (err, response)=>{
        if(err){console.log(err)}
        else{

        res.json({'token':response.clientToken});
    }
    });
  });

app.post("/checkout", function (req, res) {
    console.log(req.body)
    var nonceFromClient = req.body.nonce;
    var charge = req.body.chargeAmount;
    
    gateway.transaction.sale({
        amount: charge,
        paymentMethodNonce: nonceFromClient,
        options: {
            submitForSettlement: true
          },
    }, function(err, result){
        if(err){console.log(err)}
        else{
            console.log(result)
            console.log(result.transaction.status)
            res.json(result)
            /* myEmiter.emit('paymentStatus', result) */

            }
        });

});



/*     var saleRequest = {
        Amount: req.body.chargeAmount,
        PaymentMethodNonce: req.body.nonce,
        Options:   {
            SubmitForSettlement: true
        }
    };
      
      gateway.transaction.sale(saleRequest, (err, result)=>{
        if (err) {
          console.log("Error:", err);
        } else if (result.success) {
          console.log("Success! Transaction ID: ", result.transaction.id);
        } else {
          console.log("Error:  ", result.message);
        }
      }); */


app.post('/api/eventlist/:id', (req, res)=>{
    console.log(req.params.id);
    console.log(req.body);
    Event.findById({_id: req.params.id}, (err, event)=>{
        if(err){console.log(err)}
        else{
            event.attending.push(req.body.name)
            console.log(event)
            event.save()
            res.json({'Success': "It works"})
        }
    })
})

app.post('/api/register', (req, res)=>{
    if(req.body.password.length < 5){
        err = {
            password: 'Password needs to be longer than 5 characters'
        };
        res.json({'error': err});
    }
    else{
        if(req.body.password === req.body.cPassword){
            User.find({email: req.body.email}, (err, user) => {
                if(user.length == 0){
                    user = new User();
                    user.firstName = req.body.firstName;
                    user.lastName = req.body.lastName;
                    user.email = req.body.email;
                    bcrypt.hash(req.body.password, 10)
                        .then(hashed_password =>{
                            user.password = hashed_password;
                            user.save((err, newUser) => {
                                if(err){
                                    res.json({'error': err.errors});
                                }
                                else{
                                    console.log("success");
                                    /* bcrypt.hash(newUser._id, 10) */
                                    res.json(newUser);
                                }
                            });
                        })
                        .catch(err => {
                            console.log("hash", err);
                        });
                    }
                else{
                    err = {
                        email: 'Email already exists'
                    };
                    res.json({'error': err});
                }
            });
        }
        else{
            err = {
                password: 'Passwords do not match'
            };
            res.json({'error': err });
        }
    }
});

app.post('/api/login', (req, res)=>{
    User.findOne({email:req.body.email}, (err, user)=>{
        if(!user){
            err = {
                email: 'Email not found'
            };
            res.json({'error': err });
        }
        else{
            console.log("User", user);
            bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    res.json(user);
                })
                .catch(error => {
                    err = {
                        password: 'Password invalid'
                    };
                    res.json({'error': err });
                });
        }   
    });
});

app.post('/api/events', (req, res)=>{
    Event.create(req.body, (err, event)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(event)
        }
    })
    
})

app.get('/api/players/:id', (req, res)=>{
    User.findOne({_id: req.params.id}, (err, data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
});

app.get('/api/schedule', (req, res)=>{
    Event.find({}, (err, data)=>{
        res.json(data)
    })
})

app.get('/api/userschat', (req, res)=>{
    let keys = Object.keys(connections);
    let Users = []
    for (let prop in connections){
      Users.push(connections[prop]);
    }
    res.json({'users': Users});
});

app.put('/api/updateplayer/:id', (req, res)=>{
    console.log(req.params.id)
    console.log(req.body)
    User.findOne({_id:req.params.id}, (err, user)=>{
        console.log(user)
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.position = req.body.position
        user.height.feet = req.body.height.feet
        user.height.inches = req.body.height.inches
        user.weight = req.body.weight
        user.dob = req.body.dob
        user.completed = true
        user.save((err, user)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(user)
            }
        });  
    });
});

app.get('/api/players', (req, res)=>{
    User.find({}, (err, users)=>{
        console.log(users)
        res.json(users)
    })
})

app.get('/api/latestevent', (req, res)=>{
    Event.find({}, (err,data)=>{
        if(err){console.log(err)}
        else{
            res.json(data)
            }
        }).sort({'startTime':1}).limit(1)
})

/* app.post('/api/userschat', (req, res)=>{
    let name = req.body.firstName + ' ' + req.body.lastName;
    for (let idx in connections ){
        if(connections[idx] == name){
            console.log(connections[idx])
            delete connections[idx]
            console.log(connections)
        }
    }
}) */

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public/dist/ang-sockets/'));
});

const server = http.createServer(app);
const io = SocketIO(server);


io.on('connection', (socket) => {
    console.log("User Connected", socket.conn.id);
    
    // Listening for newUser and adding them to Connections
    socket.on('newUser', (data)=>{
        console.log(socket.conn.id)
        connections[socket.conn.id] = data['newUser'];
        console.log(connections)
        io.emit('addUser', data)
    });

    // Message being sent to other Users
    socket.on('message', (data)=>{
        console.log(data);
        socket.broadcast.emit('updateall', data.id + ": " + data.msg);
    });

    // When user leaves chat removing them from Connections 
    socket.on('destroyed', (data) => {
        console.log("it works", socket.conn.id)
        delete connections[socket.conn.id];
        console.log("User Disconnected", socket.conn.id);
        console.log(connections)
        io.emit('removeUser')
    });
    socket.on('disconnect', (data) => {
        delete connections[socket.conn.id];
        console.log("User Disconnected", socket.conn.id);
        console.log(connections)
        
    });
});

server.listen(port, ()=>{
    console.log('Server running on Port 3000');
});