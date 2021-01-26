const fs = require('fs');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 8000;

const app = express();
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.sendFile("index.html",{root: __dirname});
})


app.listen(port,()=>{
    console.log('listening');
})