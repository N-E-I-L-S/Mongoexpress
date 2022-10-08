const mongoose=require("mongoose");

const user=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sapid:{
        type:Number,
        required:true,
        max:10
    },
    branch:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
})

const User = mongoose.model("User",user);

module.exports =User;