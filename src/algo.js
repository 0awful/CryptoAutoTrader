const balances = require('./balances');
const prices = require('./prices');
const fs = require('fs');
const exchange = require('./FetchExchangeInfo');

const normalize = require('./Normalize');
const splitCoins = require('./SplitCoins');
const orders = require('./CreateOrders');
const decimals = require('./FindDecimals');
const filters = require('./OrderFilters');

const algo = async () => {
  // let walletBalances;
  // let walletPrices;
  // let exchangeInfo;
  // let normalizedData;
  // let walletAverage;
  // let split;

  let { free } = await balances.fetch();

  const values =  Object.values(free)
  const total = values.reduce((prev, curr) => prev + curr);
  const average = total / values.length;

  console.log(total, average);

  // let price = await prices.fetch();
  // let exchangePromise = exchange.fetch();

  // Promise.all(fetchArray)
  //   .then(function(data) {
  //     walletBalances = data[0];
  //     walletPrices = data[1];
  //     exchangeInfo = data[2];

  //     console.log('Normalizing');
  //     normalizedData = normalize.normalize(
  //       walletBalances,
  //       walletPrices,
  //       exchangeInfo
  //     );
  //     console.log('Averaging');

  //     walletAverage = average.average(normalizedData);
  //     console.log('Splitting coins');
  //     split = splitCoins.split(normalizedData, walletAverage);

  //     return new Promise(function(resolve, reject) {
  //       let promises = split.high.map(
  //         item =>
  //           new Promise(function(resolve, reject) {
  //             setTimeout(function() {
  //               let quantity = item.coins.toFixed(
  //                 Math.abs(decimals.find(item.info.LOT_SIZE.stepSize))
  //               );

  //               if (filters.lotSize(item.info.LOT_SIZE, quantity)) {
  //                 orders.sell(item.name, quantity).then(function() {
  //                   resolve();
  //                 });
  //               } else {
  //                 console.log(item.name, 'failed');
  //                 resolve();
  //               }
  //             }, 1000 + 200 * split.high.indexOf(item));
  //           })
  //       );
  //       Promise.all(promises).then(function() {
  //         console.log('All sell orders have resolved');
  //         resolve();
  //       });
  //     });
  //   })
  //   .then(function() {
  //     return new Promise(function(resolve, reject) {
  //       let promises = split.low.map(
  //         item =>
  //           new Promise(function(resolve, reject) {
  //             setTimeout(function() {
  //               let quantity = item.coins.toFixed(
  //                 Math.abs(decimals.find(item.info.LOT_SIZE.stepSize))
  //               );

  //               if (filters.lotSize(item.info.LOT_SIZE, quantity)) {
  //                 orders.buy(item.name, quantity).then(function() {
  //                   resolve();
  //                 });
  //               } else {
  //                 console.log(item.name, 'failed');
  //                 resolve();
  //               }
  //             }, 1000 + 200 * split.low.indexOf(item));
  //           })
  //       );
  //       Promise.all(promises).then(function() {
  //         console.log('All buy orders have resolved');
  //         resolve();
  //       });
  //     });
  //   })
  //   .then(function() {
  //     console.log('Algorithm complete');
  //   });
}

module.exports.algo = algo;
