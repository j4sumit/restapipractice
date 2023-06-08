const express = require("express");
const app = express() ;
const facultyRoute = require("./api/routes/faculty")
const studentRoute = require("./api/routes/student")
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://jb4sumit:ToEJVVS1PzjoqkZB@sumit.pqdoicm.mongodb.net/');
mongoose.connection.on("error", err =>{
    console.log('connection failed');
})
mongoose.connection.on('connected', connected =>{
    console.log("connected with database.....");
})

app.use("/student", studentRoute)
app.use("/faculty", facultyRoute)

app.use((req, res, next)=>{
    res.status(404).json({
        error :"bad request"
    })
}) 
module.exports = app;
