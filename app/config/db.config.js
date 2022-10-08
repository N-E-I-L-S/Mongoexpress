const mongoose = require('mongoose');

const connection_string = `mongodb+srv://djs4ds:0000@cluster0.n2zpq7n.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connection_string)
.then(function(db){
    console.log("Database Connected");
})
.catch(function(err){
    console.log(err);
})