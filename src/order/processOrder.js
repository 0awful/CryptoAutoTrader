const { getClient } = require("../exchange");
const { orderTypes } = require("./orderDTO");

const processOrder = ({ orderType, symbol, amount }) => {
  if (!orderType) throw new Error("orderType is required");
  if (!symbol) throw new Error("symbol is required");
  if (!amount) throw new Error("amount is required");

  const client = getClient();

  if (amount < client.markets[symbol]["limits"]["cost"]["min"]) return;
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
