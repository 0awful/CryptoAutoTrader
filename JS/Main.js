const balances = require('./FetchBalances');
const prices = require('./FetchPrices');
const normalize = require('./NormalizeData');
const average = require('./AverageData');
const splitCoins = require('./SplitCoins');

let walletBalances;
let walletPrices;
let normalizedData;
let walletAverage;
let split;

balances
  .fetch()
  .then(function(wallets) {
    walletBalances = JSON.parse(wallets);
    console.log(walletBalances);
    return prices.fetch();
  })
  .then(function(prices) {
    walletPrices = JSON.parse(prices);
    console.log(walletPrices);
    return new Promise(function(resolve, reject) {
      normalizedData = normalize.normalizeData(walletBalances, walletPrices);
      console.log(normalizedData);
      resolve(normalizedData);
    });
  })
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      walletAverage = average.average(normalizedData);
      resolve(walletAverage);
    });
  })
  .then(function(averaged) {
    return new Promise(function(resolve, reject) {
      split = splitCoins.split(normalizedData, walletAverage);
      resolve(split);
    });
  })
  .then(function() {
    // sell some coins
    console.log(split);
  });
// buy some coins
// wait

// repeat
