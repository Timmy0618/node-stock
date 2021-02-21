const express = require('express');
var cors = require('cors')
const path = require('path');
const app = express();
const fetch = require('node-fetch');
var sql = require('./mysql.js');
var get_stock_data = require('./get_stock_data.js');
//app.use(cors());
app.use(express.static(path.join(`${__dirname}/public`)));

app.get("/get/stock/data", (req, res) => {
    get_stock_data(req.query.stockname)
        .then(function(data){
            res.send(data);
        });
})


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