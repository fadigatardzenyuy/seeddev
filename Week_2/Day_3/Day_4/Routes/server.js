import express from 'express'

import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(express.json());



const port = process.env.port

app.get("/", (req, res)=> {
    res.send("Health good");
});
app.listen(port, ()=>{
    console.log("server running:",`http:/ /localhost:${PORT}`)
})
const express  = require("express");
const app = express();

app.use(express.json());

const studentsRouter= require('./routes/students.js')
app.use('student', studentsRouter)

app.listen(3000, () =>{
    console.log("server is running at http://localhost:3000");
})