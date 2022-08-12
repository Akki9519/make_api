const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/about',(req,res)=>{
    res.send("my name is akash kesharwani");
})
app.listen(3000,()=>{
    console.log("connected");
})
