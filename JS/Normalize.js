function normalize(balances, prices, info) {
  console.log('normalize Called');
  // get the keys to the balances
  let balanceKeys = Object.keys(balances);

  // initialize an object, otherwise it crashes
  var tradables = {};

  for (var i = 0; i < balanceKeys.length; i++) {
    // same here
    let priceNode = {};
    let infoNode = {};

    let key = '';
    if (
      balanceKeys[i] === 'BTC' &&
      prices[balanceKeys[i]] &&
      info[balanceKeys[i]]
    ) {
      key = 'BTC';
      console.log(key);
      infoNode = info[key];
      console.log(infoNode);
      priceNode['bid'] = prices[key].bid;
      priceNode['ask'] = ask[key].ask;
      console.log(priceNode);
    } else if (prices[balanceKeys[i] + 'BTC'] && info[balanceKeys[i] + 'BTC']) {
      key = balanceKeys[i] + 'BTC';
      console.log(key);
      infoNode = info[key];
      console.log(infoNode);
      priceNode['bid'] = prices[key].bid;
      priceNode['ask'] = prices[key].ask;
      console.log(priceNode);
    } else {
      continue;
    }

    if (priceNode && infoNode) {
      let balanceBTC = {
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
