const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret,
  recvWindow: 60000
});

//minNotional = minimum order value (price * quantity)
binance.exchangeInfo(function(data) {
  let minimums = {};
  for (let obj of data.symbols) {
    let filters = {
      minNotional: 0.001,
      minQty: 1,
      maxQty: 10000000,
      stepSize: 1,
      minPrice: 0.00000001,
      maxPrice: 100000
    };
    for (let filter of obj.filters) {
      if (filter.filterType == 'MIN_NOTIONAL') {
        filters.minNotional = filter.minNotional;
      } else if (filter.filterType == 'PRICE_FILTER') {
        filters.minPrice = filter.minPrice;
        filters.maxPrice = filter.maxPrice;
      } else if (filter.filterType == 'LOT_SIZE') {
        filters.minQty = filter.minQty;
        filters.maxQty = filter.maxQty;
        filters.stepSize = filter.stepSize;
      }
    }
    minimums[obj.symbol] = filters;
  }
  console.log(minimums);
  fs.writeFile('minimums.json', JSON.stringify(minimums, null, 4), function(
    err
  ) {});
});

// ETHBTC:
//  { minNotional: '0.00100000',
//    minQty: '0.00100000',
//    maxQty: '100000.00000000',
//    stepSize: '0.00100000',
//    minPrice: '0.00000100',
//    maxPrice: '100000.00000000' },
// LTCBTC:
//  { minNotional: '0.00100000',
//    minQty: '0.01000000',
//    maxQty: '100000.00000000',
//    stepSize: '0.01000000',
//    minPrice: '0.00000100',
//    maxPrice: '100000.00000000' },
