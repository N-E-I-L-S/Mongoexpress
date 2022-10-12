const userModel=require("../models/userModel")

const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken");
const SECRET_KEY="SECRET"

const signup=async (req,res)=>{
    const {name,email,SapId,Branch,password} =req.body;
    try{
        const existingUser =await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const securePassword=await bcrypt.hash(password,10)

        const result=await userModel.create({
            name:name,
            email:email,
            SapId:SapId,
            Branch: Branch,
            password:securePassword
        });

        const token =jwt.sign({email:result.email,id:result.id},SECRET_KEY);
        res.status(201).json({user:result,token});
    }catch(error) {
        console.log(error);
        res.status(500).json({message:"SOmething is Wrong"});

    }

}

module.exports=signup;