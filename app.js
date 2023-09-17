require("dotenv").config();
require("./db/db")();
const express = require("express");
const app = express();

//Routes
const bookRouter = require("./routes/book");

app.use(express.json());

app.use(bookRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log(`server listening on port ${PORT}`);
});