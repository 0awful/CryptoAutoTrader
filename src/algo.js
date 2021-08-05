const balances = require("./balances");
const prices = require("./prices");
const { orderTypes } = require("./order/orderDTO");
const { createOrders } = require("./order/createOrders");
const { isSet } = require("./utils");
const { processOrders } = require("./order/processOrders");

const algo = async ({ tolerance }) => {
  let { free } = await balances.fetch();

  const price = await prices.fetch();

// console.log(price);

  const coinDictionary = Object.keys(price)
    .filter(
      (coinName) =>
        isSet(free[coinName]) &&
        isSet(price[coinName].bid) &&
        isSet(price[coinName].ask) &&
        coinName.includes('BTC')
    )
    .reduce((prev, currentCoinName) => {
      return {
        ...prev,
        [currentCoinName]: {
          bal: free[currentCoinName],
          ...price[currentCoinName],
          bidBal: free[currentCoinName] * price[currentCoinName].bid || 0,
        },
      };
    }, {});
    // console.log(coinDictionary);

  // const quoteCurrencyValue = Object.values(coinDictionary).reduce(
  //   (prev, { bidBal }) => {
  //     if (typeof bidBal === "number") return prev + bidBal;
  //     return prev;
  //   },
  //   0
  // );
  // const average = quoteCurrencyValue / Object.values(coinDictionary).length;

  // console.log(
  //   "AccountBalance is",
  //   // quoteCurrencyValue,
  //   "with an average of",
  //   // average
  // );

  const orders = createOrders(coinDictionary, 360);

  const sellOrders = orders.filter(
    ({ orderType }) => orderType === orderTypes.SELL
  );
  const buyOrders = orders.filter(
    ({ orderType }) => orderType === orderTypes.BUY
  );

  console.log({ sellOrders, buyOrders })
  console.log(await processOrders(sellOrders));
  console.log(await processOrders(buyOrders));
};

module.exports.algo = algo;
