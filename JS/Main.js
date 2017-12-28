const balances = require('./FetchBalances');
const prices = require('./FetchPrices');
const info = require('./FetchExchangeInfo.js');
const normalize = require('./Normalize.js');
const average = require('./AverageData');
const splitCoins = require('./SplitCoins');
const orders = require('./CreateOrders');

let walletBalances;
let walletPrices;
let exchangeInfo;
let normalizedData;
let walletAverage;
let split;

let walletPromise = balances.fetch();
let pricesPromise = prices.fetch();
let infoPromise = info.fetch();
let fetchArray = [walletPromise, pricesPromise, infoPromise];

Promise.all(fetchArray)
  .then(function(balances, prices, info) {
    normalizedData = normalize.normalize(
      JSON.parse(balances),
      JSON.parse(prices),
      JSON.parse(info)
    );
    console.log(normalizedData);
    walletAverage = average.average(normalizedData);
    console.log(walletAverage);
    split = splitCoins.split(normalizeData, walletAverage);
    console.log(split);
    return new Promise(function(resolve, reject) {
      let promises = split.high.map(
        item =>
          new Promise(function(resolve, reject) {
            setTimeout(function() {
              orders.sell(item.name, item.coins, item.price).then(function() {
                resolve();
              });
            }, 1000 + 200 * split.high.indexOf(item));
          })
      );
      Promise.all(promises).then(function() {
        console.log('All sell orders have resolved');
        resolve();
      });
    });
  })
  .then(function() {
    return new Promise(function(resolve, reject) {
      let promises = split.low.map(
        item =>
          new Promise(function(resolve, reject) {
            setTimeout(function() {
              orders.buy(item.name, item.coins, item.price).then(function() {
                resolve();
              });
            }, 1000 + 200 * split.low.indexOf(item));
          })
      );
      Promise.all(promises).then(function() {
        console.log('All buy orders have resolved');
        resolve();
      });
    });
  });

// balances
//   .fetch()
//   .then(function(wallets) {
//     walletBalances = JSON.parse(wallets);
//
//     return prices.fetch();
//   })
//   .then(function(prices) {
//     walletPrices = JSON.parse(prices);
//
//     // why am I using pomises here?
//     return new Promise(function(resolve, reject) {
//       normalizedData = normalize.normalizeData(walletBalances, walletPrices);
//
//       resolve(normalizedData);
//     });
//   })
//   .then(function(data) {
//     return new Promise(function(resolve, reject) {
//       walletAverage = average.average(normalizedData);
//       resolve(walletAverage);
//     });
//   })
//   .then(function(averaged) {
//     return new Promise(function(resolve, reject) {
//       split = splitCoins.split(normalizedData, walletAverage);
//       resolve(split);
//     });
//   })
//   .then(function() {
//     console.log('Creating sell orders');
//
//     return new Promise(function(resolve, reject) {
//       let promises = split.high.map(
//         item =>
//           new Promise(function(resolve, reject) {
//             setTimeout(function() {
//               orders.sell(item.name, item.coins, item.price).then(function() {
//                 resolve();
//               });
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
//     console.log('Creating buy orders');
//
//     return new Promise(function(resolve, reject) {
//       let promises = split.low.map(
//         item =>
//           new Promise(function(resolve, reject) {
//             setTimeout(function() {
//               orders.buy(item.name, item.coins, item.price).then(function() {
//                 resolve();
//               });
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
//     console.log('finished successfully');
//   });
