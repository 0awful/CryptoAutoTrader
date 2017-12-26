const round = require('../Round.js');

if (
  round.round(101, 2) === 100 &&
  round.round(100, 2) === 100 &&
  round.round(0.01, -1) === 0 &&
  round.round(0.05, -1) === 0.1 &&
  round.round(0.33333, -3) === 0.333
) {
  console.log('Round is passing tests');
} else {
  console.log('Round is failing tests');
}
