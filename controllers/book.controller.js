const db = require('../db');

const shortid = require('shortid');

module.exports.index = (req, res) => {
    const books = db.get("books").value();

    res.render('books/index', {
        books: books
    })
}

module.exports.search = (req, res) => {
    const q = req.query.q;

    const listBooks = db
        .get("books")
        .value()
        .filter(book => book.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);

    res.render('books/index', {
        books: listBooks
    })
}

module.exports.delete = (req, res) => {
    const id = req.params.id;

    db.get('books').remove({ id: id }).write();

    res.redirect('/books')
}

module.exports.update = (req, res) => {
    db.get("books")
        .find({ id: req.body.id })
        .assign({ title: req.body.title })
        .write();

    res.redirect("/books");
}

module.exports.create = (req,res) => {
    req.body.id = shortid.generate();

    db.get("books").push(req.body).write();

    res.redirect('/books')
}