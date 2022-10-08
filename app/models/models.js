const mongoose=require("mongoose");

const user=mongoose.Schema({

    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    sapid:{
        type:Number,
        required:false,
        max:10
    },
    branch:{
        type:String,
        required:false,
    },
    year:{
        type:String,
        required:false,
    },
})

const User = mongoose.model("User",user);

module.exports =User;