// You're going to hate me if you think this is a normal rounding function
// The real problem here is that this rounding function expects scientific styled notation.
// Meaning something with two decimals as in 0.01 is -2 where 100 is 2.
// This makes sense within this context, but a rounding function does not evoke that mentality.
// There is a problem with postive rounding...

function round(num, dec) {
  if (dec === 0) {
    return num;
  } else if (dec > 0) {
    return Math.floor(num / Math.pow(10, dec)) * Math.pow(10, dec);
  } else {
    return Number(num.toFixed(Math.abs(dec)));
  }
}

module.exports.round = round;

