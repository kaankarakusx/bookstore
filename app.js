require("dotenv").config();
require("./db/db")();
const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.send("Hello world");
})



const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log(`server listening on port ${PORT}`);
});