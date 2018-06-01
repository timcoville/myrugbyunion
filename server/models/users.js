const mongoose = require('mongoose');
require('mongoose-type-email');
/* var QuoteSchema = new mongoose.Schema ({
    quote: {
        type: String,
        minlength: [5, "Quote needs to be longer than 5 characters"]
    }
}, {timestamps: true});

var AuthorSchema = new mongoose.Schema ({
    name: {
        type: String, 
        required: [true, "Name Required"],
        minlength: [3, "Name needs to be longer than 3 characters"]
    },
    quotes: [QuoteSchema]
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema) */

var UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        minlength: [3, "First Name needs to be longer than 3 characters"]
    },
    lastName: {
        type: String,
        minlength: [3, "Last Name needs to be longer than 3 characters"]
    },
    email: {type: mongoose.SchemaTypes.email, required: true},
    password: {type: String, required: true},
});