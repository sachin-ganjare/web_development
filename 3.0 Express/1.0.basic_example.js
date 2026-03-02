// assignment 1: create a simple server using express js with returning hello world!
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello world!");
});

app.listen(3000, ()=>{
    console.log("connected to port 3000");
})
