const { getClient } = require("../exchange");
const { orderTypes } = require("./orderDTO");

const processOrder = ({ orderType, symbol, amount }) => {
  const client = getClient();

  if (orderType === orderTypes.SELL)
    return client.createMarketSellOrder(symbol, amount);
  if (orderType === orderTypes.BUY)
    return client.createMarketBuyOrder(symbol, amount);
};

module.exports = {
  processOrder,
};
