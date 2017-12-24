const ASQ = require('asynquence');
const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

binance.balance(function(balances) {
  console.log(JSON.stringify(balances));
});

//module.exports.fetchBalances = fetchBalances();
