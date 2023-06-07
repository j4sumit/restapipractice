const express = require("express");
const app = express() ;

const studentRoute = require("./api/routes/student")
app.use("/student", studentRoute)

const facultyRoute = require("./api/routes/faculty")
app.use("/faculty", facultyRoute)


app.use((req, res, next)=>{
    res.status(404).json({
        error :"bad request"
    })
}) 
module.exports = app;
