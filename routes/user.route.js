const express = require('express');
const router = express.Router();
var multer = require('multer');

const controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var upload = multer({ dest: './public/uploads/' });

router.get("/", controller.index);

router.get("/create", (req, res) => {
    res.render("users/create")
});

router.get("/:id/delete", controller.delete);

router.get("/search", controller.search);

router.post("/create", upload.single('avatar'), validate.postCreate, controller.create);

module.exports = router;