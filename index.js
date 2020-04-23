const express = require("express");
const app = express();

var cookieParser = require('cookie-parser')

app.use(cookieParser())

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home/index")
});

const userRoute = require('./routes/user.route.js');
app.use('/users', userRoute);

// listen for requests :)
app.listen(3000, () => {
    console.log("Server listening on port " + 3000);
});