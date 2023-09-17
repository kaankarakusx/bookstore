//Database 
const mongoose = require("mongoose");

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;

module.exports = function () {
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.nyyp1jh.mongodb.net/${name}?retryWrites=true&w=majority`)
        .then(() => { console.log("mongodb connected"); })
        .catch((err) => { console.log(er); })
};