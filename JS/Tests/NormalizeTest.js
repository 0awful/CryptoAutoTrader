const fs = require('fs');
const normalize = require('../Normalize.js');

const prices = JSON.parse(
  fs.readFileSync('../../Data/PricesTestData.json', 'utf8')
);
const balances = JSON.parse(
  fs.readFileSync('../../Data/BalancesTestData.json', 'utf8')
);
const info = JSON.parse(
  fs.readFileSync('../../Data/FetchExchangeTestData.json', 'utf8')
);
const expectedResult = JSON.parse(
  fs.readFileSync('../../Data/NormalizedData.json', 'utf8')
);

let testedResult = normalize.normalize(balances, prices, info);

//Update snapshot by copying this to the NormalizedData file
// console.log(JSON.stringify(testedResult));

if (JSON.stringify(testedResult) === JSON.stringify(expectedResult)) {
  console.log('Normalize is passing tests');
} else {
  console.log('Normalize is failing tests');
}
