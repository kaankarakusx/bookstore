const Book = require("../models/book");


exports.get_books = async function (req, res) {

    try{
        const books = await Book.find();
        res.send(books);
    }catch(err){
        console.log(err);
    }

};

exports.get_book = async function (req, res) {
    const id = req.params.id;

    try {
        const books = await Book.findById(id);
        res.send(books);
    } catch (err) {
        console.log(err);
    }
};

exports.post_book = async function (req, res) {
    const {title,author} = req.body;
    try {
        const book = await Book.create({
            title:title,
            author:author
        });

        res.status(200).send(book);
    } catch (err) {
        console.log(err);
    }
};


exports.put_book = async function (req, res) {
    const id = req.params.id;
    const {title,author} = req.body;
    try {
        const book = await Book.findOne({_id:id});
        console.log(book);
        if(!book){
            return res.status(404).send("not found");
        }
        book.title = title;
        book.author = author;
        await book.save();

        res.status(200).send(book);
    } catch (err) {
        console.log(err);
    }
};


exports.delete_book = async function (req, res) {
    const id = req.params.id;
    try {
        const book = await Book.findOneAndDelete({_id:id});
        res.send(book);
    } catch (err) {
        console.log(err);
    }
};