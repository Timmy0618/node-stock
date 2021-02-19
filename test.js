const fetch = require('node-fetch');



function get_stock_data(stockname) {
    var time = get_time();
    return fetch('https://query1.finance.yahoo.com/v8/finance/chart/'+stockname+'?symbol='+stockname+'&period1='+time.before+'&period2='+time.now+'&useYfid=true&interval=1d&includePrePost=true&events=div%7Csplit%7Cearn&lang=en-US&region=US&crumb=s9eQSRza8b8&corsDomain=finance.yahoo.com')
        .then(function (data) {
            return data.json();
        })
}

function get_time(){
    var today = new Date();
    var now = Number(Date.parse(today))/1000;
    var before = (now - 5*365*86400);
    var time = {now:now,before:before};
    console.log(time);
    return time;
}

module.exports = get_stock_data;

get_time();