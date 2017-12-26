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

console.log(findDecimals(1));
console.log(findDecimals(10));
console.log(findDecimals(100));
console.log(findDecimals(0.1));
console.log(findDecimals(0.01));
console.log(findDecimals(0.001));
console.log(findDecimals(0.0001));

