const fs = require('fs');
const splitCoins = require('../splitCoins.js');

const input = JSON.parse(
  fs.readFileSync('../../Data/NormalizedData.json', 'utf8')
);
const expectedResult = JSON.parse(
  fs.readFileSync('../../Data/SplitData.json', 'utf8')
);

// this is the average should probably be in a file that can be updated to fix multiple tests
let result = splitCoins.split(input, 0.000005432392056818183);

// This should be uncommented whenever you need to update the results for the next test
console.log(JSON.stringify(result));

if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
  console.log('SplitCoins is passing its tests');
} else {
  console.log('SplitCoins is failing its tests');
}
