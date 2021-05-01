function average(data) {
  const keys = Object.keys(data);

  let average = 0;

  for (var i = 0; i < keys.length; i++) {
    average += Number(data[keys[i]].balanceBTC.bid);
  }
  console.log('Total balance', average);
  average = average / keys.length;
  console.log('Average', average);
  return average;
}

module.exports.average = average;
