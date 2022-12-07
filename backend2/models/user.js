const mongoose = require ("mongoose");
//const joi = require("joi");

const schemaUser = new mongoose.Schema({
    username:{ 
        type: String,
        required: true,
    },password:{
        type: String,
        required: true,
    },email:{
        type: String,
    },
});

const User = mongoose.model("user", schemaUser);


module.exports = User;