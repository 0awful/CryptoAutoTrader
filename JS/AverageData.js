function average(data) {
  const keys = Object.keys(data);

  let average = 0;

  for (var i = 0; i < keys.length; i++) {
    average += data[keys[i]].balanceBTC.bid;
  }

  average = average / keys.length;

  return average;
}

module.exports.average = average;
