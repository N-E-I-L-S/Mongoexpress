const express = require('express');
const router = express.Router();
const User = require('../models/models');

// get all users
router.get('/',function(req,res,next){
    User.find({}).then(function(user){
        res.send(user);
    }).catch(next);
});

// add a new user 
router.post('/',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// update a user 
router.put('/:id',function(req,res,next){
    User.findOneAndUpdate({_id: req.params.id},req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    });
});

// delete a user 
router.delete('/:id',function(req,res,next){
    User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports = router;