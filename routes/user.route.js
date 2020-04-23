const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.get("/",controller.index);

router.get("/create",(req,res)=> {
    res.render("users/create")
});

router.get("/:id/delete",controller.delete);

router.get("/search",controller.search);

router.post("/create",controller.create);

module.exports = router;