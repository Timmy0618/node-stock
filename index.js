const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
var sql = require('./mysql.js');

app.use(express.static(path.join(`${__dirname}/public`)));

app.get("/login", (req, res) => {
    console.log("test");
    sql("SELECT * FROM Stock.User;")
        .then(function (data) {
            res.send(data);
        });
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
});

const port = process.env.PORT || 8080;
app.listen(port)