const express = require("express");
const req = require("express/lib/request");
const quotes = require("./quotes.json")
const app = express();

app.get("/",(req,res)=>(
    res.send("sent from response")
))

app.get("/quote",(req,res)=>(
    res.send(quotes)
))
app.listen(5010,()=>(
    console.log("server strated on port 5010")
))