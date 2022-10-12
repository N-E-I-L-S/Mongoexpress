const express = require('express');
const userRouter = require('./Routes/userRoutes');
const app = express();

const mongoose=require("mongoose");

app.use(express.json());

app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Hello");
});

mongoose.connect("mongodb+srv://djs4ds:0000@cluster0.n2zpq7n.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3001, ()=>{
        console.log("Server Running on http://localhost:3001");
    });
})
.catch((error)=>{
    console.log(error);
})
