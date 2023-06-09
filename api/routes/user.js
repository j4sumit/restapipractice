const express = require("express");
const router = express.Router();
const mongoose= require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");

router.post("/",(req,res,next)=>{
//converting password in hashcode
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if(err)
        {
            return res.status(500).json({
                error: err
            })
        }
        else{
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                username:req.body.username,
                password:hash,
                phone: req.body.phone,
                email: req.body.email,
                userType:req.body.userType
            })
            user.save()
            .then(result=>{
                res.status(200).json({
                new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
        }
    });

})


module.exports= router;