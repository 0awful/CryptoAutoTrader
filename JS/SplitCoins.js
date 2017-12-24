function splitCoins(data, average) {
  let keys = Object.keys(data);

  let splitCoins = {
    high: {},
    low: {}
  };

  for (var i = 0; i < keys.length; i++) {
    if (data[keys[i]].balanceBTC.bid > average) {
      let overage = data[keys[i]].balanceBTC.bid - average;
      let priceToSell = data[keys[i]].price.bid;
      let coinsToSell = overage / priceToSell;

      let node = {
        name: keys[i],
        coins: coinsToSell,
        price: priceToSell
      };

      splitCoins.high[keys[i]] = node;
    } else {
      let shortage = average - data[keys[i]].balanceBTC.bid;
      let priceToBuy = data[keys[i]].price.bid;
      let coinsToBuy = shortage / priceToBuy;

      let node = {
        name: keys[i],
        coins: coinsToBuy,
        price: priceToBuy
      };

      splitCoins.low[keys[i]] = node;
    }
  }

  return splitCoins;
}

module.exports.splitCoins = splitCoins;
