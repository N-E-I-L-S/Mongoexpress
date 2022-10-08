const express = require('express')
const bodyParser = require('body-parser')
var data = require('./app/models/models.js')

const app = express();

app.get('/', (req, res)=>{
    res.send("Server is Up")
})

require("./app/routes/routes")(app);

app.listen(3001, ()=>{
    console.log("Server Running on http://localhost:3001");
})