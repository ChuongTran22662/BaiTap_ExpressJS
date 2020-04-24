const express = require('express');
const router = express.Router();

const controller = require('../controllers/transaction.controller');
const db = require('../db')

router.get("/", controller.index);

router.get("/create", (req, res) => {

    const dataUser = db.get('users').value();
    const dataBook = db.get('books').value();

    res.render("transactions/create", {
        dataUser,
        dataBook
    })
});

router.get("/:id/complete",controller.complete);

router.post("/create",controller.create);

module.exports = router;