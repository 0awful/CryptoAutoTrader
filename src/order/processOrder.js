const { getClient } = require("../exchange");
const { orderTypes } = require("./orderDTO");

const processOrder = ({ orderType, symbol, amount }) => {
  const client = getClient();

  try {
    if (orderType === orderTypes.SELL)
      client.createMarketSellOrder(symbol, amount);
    if (orderType === orderTypes.BUY)
      client.createMarketBuyOrder(symbol, amount);
  } catch (e) {
    console.error({ e, orderType, symbol, amount });
  }
};

module.exports = {
  processOrder,
};
