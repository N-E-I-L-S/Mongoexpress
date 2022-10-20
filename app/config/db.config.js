const mongoose = require('mongoose');

require("dotenv").config();
const connection_string = process.env.CONNECTION_STRING;

mongoose.connect(connection_string)
.then(function(db){
    console.log("Database Connected");
})
.catch(function(err){
    console.log(err);
})