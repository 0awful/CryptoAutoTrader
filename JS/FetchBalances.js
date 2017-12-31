const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

function fetchBalances() {
  console.log('Fetch Balances called');
  return new Promise(function(resolve, reject) {
    binance.balance(function(balances) {
      console.log('Fetch Balances returned');
      resolve(balances);
    });
  });
}

// returns a promise that can be resolved for the contents of the function
module.exports.fetch = fetchBalances;
