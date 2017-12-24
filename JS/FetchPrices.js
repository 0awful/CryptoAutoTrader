const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

function fetchPrices() {
  return new Promise(function(resolve, reject) {
    binance.bookTickers(function(ticker) {
      resolve(JSON.stringify(ticker));
    });
  });
}

module.exports.fetchPrices = fetchPrices;
