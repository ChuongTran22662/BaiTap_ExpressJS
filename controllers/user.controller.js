const db = require('../db');

const shortid = require('shortid');

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
}

module.exports.create = (req, res) => {
    req.body.id = shortid.generate();

    db.get('users').push(req.body).write();

    res.redirect('/users');
}

module.exports.search = (req, res) => {
    const q = req.query.q;
    const list = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);

    res.render('users/index', {
        users: list
    })
}

module.exports.delete = (req, res) => {
    const id = req.params.id;

    db.get("users").remove({ id: id }).write();

    res.redirect('/users')
}