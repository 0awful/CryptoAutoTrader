const fs = require('fs');
const normalizeData = require('../NormalizeData.js');

const prices = JSON.parse(
  fs.readFileSync('../../Data/PricesTestData.json', 'utf8')
);
const balances = JSON.parse(
  fs.readFileSync('../../Data/BalancesTestData.json', 'utf8')
);
const expectedResult = JSON.parse(
  fs.readFileSync('../../Data/NormalizedData.json', 'utf8')
);

let testedResult = normalizeData.normalizeData(balances, prices);

//Update snapshot by copying this to the NormalizedData file
//console.log(JSON.stringify(testedResult));

if (JSON.stringify(testedResult) === JSON.stringify(expectedResult)) {
  console.log('NormalizeData is passing tests');
} else {
  console.log('NormalizeData is failing tests');
}
