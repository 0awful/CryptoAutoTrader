function normalize(balances, prices, info) {
  console.log('Normalize Called');
  // get the keys to the balances
  let balanceKeys = Object.keys(balances);

  // initialize an object, otherwise it crashes
  var tradables = {};

  for (var i = 0; i < balanceKeys.length; i++) {
    if (balanceKeys[i] === 'BTC') {
      let priceNode = {};
      let infoNode = {};
      let balanceBTC = {};

      let key = 'BTC';
      infoNode = {};
      priceNode['bid'] = '';
      priceNode['ask'] = '';
      balanceBTC = {
        bid: balances[key].available,
        ask: balances[key].available
      };

      let node = {
        balance: balances[balanceKeys[i]],
        balanceBTC: balanceBTC,
        price: priceNode,
        info: infoNode
      };

      tradables[key] = node;
    } else if (prices[balanceKeys[i] + 'BTC'] && info[balanceKeys[i] + 'BTC']) {
      let priceNode = {};
      let infoNode = {};
      let balanceBTC = {};

      let key = balanceKeys[i] + 'BTC';
      infoNode = info[key];
      priceNode['bid'] = prices[key].bid;
      priceNode['ask'] = prices[key].ask;

      balanceBTC = {
        bid: balances[balanceKeys[i]].available * priceNode.bid,
        ask: balances[balanceKeys[i]].available * priceNode.ask
      };

      let node = {
        balance: balances[balanceKeys[i]],
        balanceBTC: balanceBTC,
        price: priceNode,
        info: infoNode
      };

      tradables[key] = node;
    }
  }

  return tradables;
}

module.exports.normalize = normalize;
