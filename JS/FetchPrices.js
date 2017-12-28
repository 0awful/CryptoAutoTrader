const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

function fetchPrices() {
  console.log('fetch prices called');
  return new Promise(function(resolve, reject) {
    binance.bookTickers(function(ticker) {
      console.log('fetch prices returned');
      resolve(JSON.stringify(ticker));
    });
  });
}

module.exports.fetch = fetchPrices;
