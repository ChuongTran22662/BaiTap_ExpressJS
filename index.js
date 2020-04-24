const express = require("express");
const app = express();

var cookieParser = require('cookie-parser')

app.use(cookieParser())

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var authMiddleware = require('./middlewares/auth.middleware');


app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home/index")
});

const authRoute = require('./routes/auth.route');
app.use('/auth', authRoute);

const userRoute = require('./routes/user.route');
app.use('/users',authMiddleware.requireAuth, userRoute);

const bookRoute = require('./routes/book.route');
app.use('/books',authMiddleware.requireAuth, bookRoute);

const transactionRoute = require('./routes/transaction.route');
app.use('/transactions',authMiddleware.requireAuth, transactionRoute);

var productRoute = require('./routes/product.route');
app.use('/products', productRoute);

// listen for requests :)
app.listen(3000, () => {
    console.log("Server listening on port " + 3000);
});