const Binance = require('./binace');

function fetchPrices() {
  console.log('Fetch Prices called');
  return new Promise(function(resolve, reject) {
    Binance.bookTickers(function(ticker) {
      console.log('Fetch Prices returned');
      resolve(ticker);
    });
  });
}

module.exports.fetch = fetchPrices;
