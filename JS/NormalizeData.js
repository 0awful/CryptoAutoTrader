function normalizeData(balances, prices) {
  // get the keys to the balances
  let balanceKeys = Object.keys(balances);

  // initialize an object, otherwise it crashes
  var tradables = {};

  for (var i = 0; i < balanceKeys.length; i++) {
    // same here
    let priceNode = {};
    let key = '';
    if (balanceKeys[i] === 'BTC' && prices[balanceKeys[i]]) {
      key = 'BTC';
      priceNode['bid'] = prices[key].bid;
      priceNode['ask'] = ask[key].ask;
    } else {
      if (prices[balanceKeys[i] + 'BTC']) {
        key = balanceKeys[i] + 'BTC';
        priceNode['bid'] = prices[key].bid;
        priceNode['ask'] = prices[key].ask;
      } else {
        continue;
      }
    }

    if (priceNode) {
      let balanceBTC = {
        bid: balances[balanceKeys[i]].available * priceNode.bid,
        ask: balances[balanceKeys[i]].available * priceNode.ask
      };

      let node = {
        balance: balances[balanceKeys[i]],
        balanceBTC: balanceBTC,
        price: priceNode
      };

      tradables[key] = node;
    }
  }
  return tradables;
}

module.exports.normalizeData = normalizeData;
