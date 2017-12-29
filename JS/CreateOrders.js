const binance = require('node-binance-api');
let apiinfo = require('./APIInfo');

let binanceInfo = apiinfo.apiinfo.Binance;

binance.options({
  APIKEY: binanceInfo.apikey,
  APISECRET: binanceInfo.apisecret,
  recvWindow: 60000
});

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
        // todo: handle responses
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
      // binance.sell(ticker, quantity, price, {}, function(response) {
      //   console.log(response, ticker);
      //   resolve(response);
      //   // todo: handle responses
      // });
      binance.marketSell(ticker, quantity, function(response) {
        console.log(response, ticker);
        resolve(response);
        // todo: handle responses
      });
    });
  }
}

module.exports.buy = buy;
module.exports.sell = sell;
