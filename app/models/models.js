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
    SapId:{
        type:Number,
        required:false,
        max:10
    },
    Branch:{
        type:String,
        required:false,
    },
    Year:{
        type:String,
        required:true,
    },
})

const User = mongoose.model("User",user);

module.exports =User;