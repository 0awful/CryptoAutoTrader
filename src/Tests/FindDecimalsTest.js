const decimals = require('../FindDecimals.js');

if (
  decimals.find(1) === 0 &&
  decimals.find(10) === 1 &&
  decimals.find(100) === 2 &&
  decimals.find(0.1) === -1 &&
  decimals.find(0.01) === -2
) {
  console.log('FindDecimals is passing tests');
}
