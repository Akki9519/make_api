const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.listen(3000,()=>{
    console.log("connected");
})