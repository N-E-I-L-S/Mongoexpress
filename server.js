const express = require('express')
const bodyParser = require('body-parser')
var data = require('./app/models/models')
const db = require("./app/config/db.config");
const router = require('./app/routes/routes');

const app = express();

//Home
app.get('/', (req, res)=>{
    res.send("Server is Up")
})

//Json Encoding for Post Request
app.use(
    express.urlencoded({ extended: true })
);  
app.use(express.json());

//CRUD middleware
app.use('/api/user',require('./app/routes/routes'));
//User Auth
var auth = express.Router(),
  {
    signup,
    signin
  }=require("./app/auth/auth.js");

app.post("/signup", signup, (req, res)=>{

})

app.post("/signin", signin, (req,res)=>{

})

app.listen(3001, ()=>{
    console.log("Server Running on http://localhost:3001");
})