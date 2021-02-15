const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
var msg = require('./mysql.js');

app.use(express.static(path.join(`${__dirname}/public`)));

app.get("/login", (req, res) => {
    console.log("test");
    res.send(msg("SELECT * FROM Stock.User;"));
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.listen(3030)