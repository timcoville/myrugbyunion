// Require Mongoose
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/rugby');

// Require Models
require('./../models/models');