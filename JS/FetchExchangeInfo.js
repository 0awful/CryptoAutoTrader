const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret
});

function fetch() {
  console.log('Fetch Exchange Info called');
  let promise = new Promise(function(resolve, reject) {
    binance.exchangeInfo(function(response) {
      let returnable = {};
      for (let i = 0; i < response.symbols.length; i++) {
        let node = response.symbols[i];
        let filters = {};
        for (let n = 0; n < node.filters.length; n++) {
          let filter = node.filters[n];
          filters[filter.filterType] = filter;
        }
        returnable[node.symbol] = filters;
      }
      console.log('fetch Exchange info returned');
      let parsed = JSON.parse(returnable);
      console.log(parsed, 'returned');
      resolve(parsed);
    });
  });

  return promise;
}

module.exports.fetch = fetch;
