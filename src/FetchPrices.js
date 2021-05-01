const { binance } = require('./binance');

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
