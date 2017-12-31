const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

function fetchPrices() {
  console.log('Fetch Prices called');
  return new Promise(function(resolve, reject) {
    binance.bookTickers(function(ticker) {
      console.log('Fetch Prices returned');
      resolve(ticker);
    });
  });
}

module.exports.fetch = fetchPrices;
