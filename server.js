const express = require('express')
const bodyParser = require('body-parser')
var data = require('./app/models/models')
const db = require("./app/config/db.config")

const app = express();

app.get('/', (req, res)=>{
    res.send("Server is Up")
})

app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

app.use('/api/user',require('./app/routes/routes'));

app.listen(3001, ()=>{
    console.log("Server Running on http://localhost:3001");
})