const fetch = require('node-fetch');



async function get_stock_data(stockname) {
    var time = get_time();
    console.log(stockname);
    return await fetch('https://query1.finance.yahoo.com/v8/finance/chart/' + stockname + '?symbol=' + stockname + '&period1=' + time.before + '&period2=' + time.now + '&useYfid=true&interval=1d&includePrePost=true&events=div%7Csplit%7Cearn&lang=en-US&region=US&crumb=s9eQSRza8b8&corsDomain=finance.yahoo.com')
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            if (data.length ===0)
                return data;
            var timestamp = data.chart.result[0].timestamp;
            var stock = data.chart.result[0].indicators.quote[0];
            stock.timestamp = timestamp;
            return stock;
        })
}


function get_time() {
    var today = new Date();
    var now = Number(Date.parse(today)) / 1000;
    var before = (now - 1 * 365 * 86400);
    var time = { now: now, before: before };
    return time;
}

module.exports = get_stock_data;
