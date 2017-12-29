const fs = require('fs');
const average = require('../AverageData.js');

const testData = JSON.parse(
  fs.readFileSync('../../Data/NormalizedData.json', 'utf8')
);

let testResult = average.average(testData);

let desiredAverage = 0.011241326410123598;

// This is the proper average to be derived from the test data
if (testResult === desiredAverage) {
  console.log('AverageData is passing tests');
} else {
  console.log('AverageData is failing tests');
}
