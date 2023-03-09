const mongoose = require('mongoose');

const connection_string = CONNECTION_STRING;

mongoose.connect(connection_string)
.then(function(db){
    console.log("Database Connected");
})
.catch(function(err){
    console.log(err);
})
