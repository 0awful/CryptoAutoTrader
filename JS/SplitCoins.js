//TODO: FUCK CANCER SHOUT OUT TO BOOSIE

function splitCoins(data, average) {
  let keys = Object.keys(data);

  let splitCoins = {
    high: [],
    low: []
  };

  for (var i = 0; i < keys.length; i++) {
    if (data[keys[i]].balanceBTC.bid > average) {
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
    } else {
      let shortage = average - data[keys[i]].balanceBTC.bid;
      let priceToBuy = data[keys[i]].price.bid;
      let coinsToBuy = shortage / priceToBuy;

      let node = {
        name: keys[i],
        coins: coinsToBuy,
        price: priceToBuy,
        info: data[keys[i]].info
      };

      splitCoins.low.push(node);
    }
  }

  return splitCoins;
}

module.exports.split = splitCoins;
