const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/secret-config.json');

//const sequelize = require('./app/sequelize');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// top route for testing
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Amex CSR API" });
});

// set up Router
require('./app/routes/customer.route')(app);
require("./app/routes/address.route")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}.`);
});