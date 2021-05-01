const { binance } = require('./binance');

function fetchBalances() {
  console.log('Fetch Balances called');
  return new Promise(function(resolve, reject) {
    Binance.balance(function(balances) {
      console.log('Fetch Balances returned');
      resolve(balances);
    });
  });
}

// returns a promise that can be resolved for the contents of the function
module.exports.fetch = fetchBalances;
