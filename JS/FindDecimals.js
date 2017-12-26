// used in determining when to round when inputting prices. If they every have a non-one step size this breaks entirely. Should be refactored

function findDecimals(x) {
  let decimals = 0;

  if (x === 1) {
    return decimals;
  } else if (x > 1) {
    decimals += 1;
    return decimals + findDecimals(x / 10);
  } else {
    decimals -= 1;
    return decimals + findDecimals(x * 10);
  }
}

module.exports.find = findDecimals;
