// Require Mongoose
const mongoose = require('mongoose');

// Require Author Model
var Author = require('./../models/models');

module.exports = {
  
};

/*         Author.findOne({_id: req.params.id}, (err, record)=>{
            if(err){
                res.json(err);
            }
            else{
                record.quotes.push({quote: req.body.quote});
                record.save();
                res.json(record);
            } 



              allAuthors: (req, res)=>{
        Author.find({}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },
    createAuthor: (req, res)=>{
        Author.create({name: req.body.name}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            } 
        });
    },
    singleAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },
    updateAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, record)=>{
            if(err){
                res.json(err);
            }
            else{
                record.set({name: req.body.name});
                record.save( (err, data)=>{
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(data);
                    }
                });   
            }
        });
    },
    deleteAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, record)=>{
            if(err){
                res.json(err);
            }
            else{
                record.remove();
                res.json({'Success': 'Author Deleted'});
            } 
        });
    },
    createQuote: (req, res)=>{
        console.log(req.params.id)
        console.log(req.body)
        Author.findOne({_id: req.params.id}, (err, record)=>{
            if(err){

                res.json(err);
            }
            else{
                record.quotes.push({quote: req.body.quote});
                record.save((err)=>{
                    if(!err){
                        res.json(record);
                    }
                    else{
                        res.json(err)
                    }
                });
            } 
        });
    },
    deleteQuote: (req, res)=> {
       console.log(req.params.id)
       console.log(req.params.quid)
       Author.findOne({_id: req.params.id}, (err, record)=>{
        if(!err){
            record.quotes.id(req.params.quid).remove();
            record.save((err)=>{
                if(!err){
                    res.json({"success": "Quote Deleted but not saved"})
                }
                else{
                    res.json(err)
                }
            })
            
            }
        else{
            res.json(err)
        }
        });
    }

    
        });*/