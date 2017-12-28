const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

// TODO: refactor this to not do data manipulation.
function fetch() {
  console.log('Fetch Exchange Info called');
  let returnable = {};
  let promise = new Promise(function(resolve, reject) {
    binance.exchangeInfo(function(response) {
      for (let i = 0; i < response.symbols.length; i++) {
        let node = response.symbols[i];
        let filters = {};
        for (let n = 0; n < node.filters.length; n++) {
          let filter = node.filters[n];
          filters[filter.filterType] = filter;
        }
        returnable[node.symbol] = filters;
      }
      console.log('Fetch Exchange Info returned');

      resolve(returnable);
    });
  });

  return promise;
}

module.exports.fetch = fetch;
