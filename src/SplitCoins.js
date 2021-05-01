/*
This function processes a data from the normalizeData function and the average from the average data function
It returns a subset of the data that matches one of two criteria.
First it finds any items that have a sell price that exceeds the average by at least the fee of a sale
  These will later be sold
Then it finds any items that have a buy price that are lower than the average by at least the fee of the pruchase
  These will later be bought

This subset will not inherently contain all coins

*/
function splitCoins(data, average) {
  // this is used to interate through the normalized data
  let keys = Object.keys(data);
  let skipped = 0;
  // this will later be returned
  let splitCoins = {
    high: [],
    low: []
  };

  for (var i = 0; i < keys.length; i++) {
    // you cannot market buy or sell BTC so we do not acknowledge it here
    if (keys[i] === 'BTC') {
      skipped += 1;
      continue;
    }

    // anything that passes this call will be sold
    if (Number(data[keys[i]].balanceBTC.bid * 0.999) > average) {
      let overage = data[keys[i]].balanceBTC.bid - average;
      let priceToSell = data[keys[i]].price.bid;
      let coinsToSell = overage / priceToSell;

      let node = {
        name: keys[i],
        coins: coinsToSell,
        price: priceToSell,
        info: data[keys[i]].info
      };

      splitCoins.high.push(node);
    } else if (Number(data[keys[i]].balanceBTC.ask) * 1.001 < average) {
      let shortage = average - data[keys[i]].balanceBTC.ask;
      let priceToBuy = data[keys[i]].price.ask;
      let coinsToBuy = shortage / priceToBuy;

      let node = {
        name: keys[i],
        coins: coinsToBuy,
        price: priceToBuy,
        info: data[keys[i]].info
      };

      splitCoins.low.push(node);
    } else {
      skipped += 1;
      continue;
    }
  }
  console.log('We recieved', keys.length, 'keys');
  console.log('We passed on', skipped, 'items');
  return splitCoins;
}

module.exports.split = splitCoins;
