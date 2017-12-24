const fs = require('fs');
const average = require('../AverageData.js');

const testData = JSON.parse(
  fs.readFileSync('../../Data/NormalizedData.json', 'utf8')
);

let testResult = average.average(testData);

// This is the proper average to be derived from the test data
if (testResult === 0.000005432392056818183) {
  console.log('AverageData is passing tests');
} else {
  console.log('AverageData is failing tests');
}
