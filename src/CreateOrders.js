const { binance } = require('./binance');

function buy(ticker, quantity) {
  if (quantity === 0) {
    console.log(
      'Not creating order with quantity 0',
      'Instead returning dummy order'
    );
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 250);
    });
  } else {
    console.log(
      'creating buy order with the following paramaters:',
      ticker,
      quantity
    );
    return new Promise(function(resolve, reject) {
      binance.marketBuy(ticker, quantity, function(response) {
        console.log(response, ticker);
        resolve(response);
        // TODO: handle responses
      });
    });
  }
}

function sell(ticker, quantity) {
  if (quantity === 0) {
    console.log(
      'Not creating order with quantity 0',
      'Instead returning dummy order'
    );
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 250);
    });
  } else {
    console.log(
      'creating sell order with the following paramaters:',
      ticker,
      quantity
    );
    return new Promise(function(resolve, reject) {
      binance.marketSell(ticker, quantity, function(response) {
        console.log(response, ticker);
        resolve(response);
        // TODO: handle responses
      });
    });
  }
}

module.exports.buy = buy;
module.exports.sell = sell;
