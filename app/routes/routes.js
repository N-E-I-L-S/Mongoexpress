module.exports = app =>{
    // const user = require('../controller/controller');

    const router = require("express").Router();

    // Create new entry
    router.post("/", (req, res)=>{
        console.log("Created new Entry")
    })

    //Get all entries
    router.get("/", ()=>{
        console.log("Get all");
    })

    //Get entry by ID
    router.get("/:id", ()=>{
        console.log("Get by ID")
    })

    // Update an entry by ID
    router.put("/:id", ()=>{
        console.log("Update by ID")
    })

    // Delete an entry by ID
    router.delete("/:id", ()=>{
        console.log("Delete ID")
    })

    //Delete all entries
    router.delete("/", ()=>{
        console.log("Delete All")
    })

    //Middleware
    app.use("/api/user", router);
}