const express = require('express');
const router = express.Router();

const db = require('../db');

const controller = require('../controllers/book.controller');

router.get('/', controller.index);

router.get('/create', (req, res) => {
    res.render('books/create');
})

router.get('/search', controller.search);

router.get('/:id/delete', controller.delete);

router.post('/create', controller.create);

router.get('/:id/update',(req,res) => {
    const id = req.params.id;

    res.render('books/update',{
        id:id
    })
});

router.post('/update', controller.update);

module.exports = router;