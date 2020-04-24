const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

router.get("/", controller.index);

router.get("/create", (req, res) => {
    res.render("users/create")
});

router.get("/:id/delete", controller.delete);

router.get("/search", controller.search);

router.post("/create", validate.postCreate, controller.create);

module.exports = router;