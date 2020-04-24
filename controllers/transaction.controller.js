const db = require('../db');

const shortid = require('shortid');

module.exports.index = (req, res) => {
    const transactions = db.get("transactions").value();

    // var usersBorrow = [];
    // var booksBorrow = [];
    // var amountBook = [];
    // var statusBook = [];

    // dataTran.forEach(item => {
    //     usersBorrow.push(db.get("users").find({
    //         id: item.userId
    //     }).value());
    //     booksBorrow.push(db.get("books").find({
    //         id: item.bookId
    //     }).value());
    //     amountBook.push(item.id);
    //     statusBook.push(item.isComplete);
    // });

    // console.log(usersBorrow)

    // res.render("transactions", {
    //     usersBorrow: usersBorrow,
    //     booksBorrow: booksBorrow,
    //     amountBook: amountBook,
    //     statusBook: statusBook
    // });

    res.render('transactions/index', {
        transactions: transactions
    })
}

module.exports.create = (req, res) => {

    var bookRecieve = req.body.bookRecieve;
    var userRecieve = req.body.userRecieve;
    var idBookRecieve = db
        .get("books")
        .find({ title: bookRecieve })
        .value().id;
    var idUserRecieve = db
        .get("users")
        .find({ name: userRecieve })
        .value().id;

    const id = shortid.generate();
    db.get("transactions")
        .push({
            id,
            userId: idUserRecieve,
            bookId: idBookRecieve,
            isComplete: false
        })
        .write();
    res.redirect("/transactions");
}

module.exports.complete = (req, res) => {
    //const id = req.params.id;
    //const x = db.get('transactions').find({ id: id }).value();

    const id = req.params.id;

    db.get("transactions").find({ id: id }).assign({isComplete : true}).write();

    res.redirect('/transactions')
}
