const ASQ = require('asynquence');
const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

function fetchBalances() {
  let walletBalances;
  ASQ(function(done) {
    binance.balance(function(balances) {
      done((walletBalances = JSON.parse(balances)));
    });
  }).then(function(_, _) {
    return walletBalances;
  });
}

module.exports.fetchBalances = fetchBalances();
