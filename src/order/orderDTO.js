const { getClient } = require("../exchange");

const SELL = "SELL";
const BUY = "BUY";

const createOrderDTO = (
  { symbol, bidBal, bid, ask },
  average,
  tolerance = 0
) => {
  const client = getClient();
  if (bidBal > average * (1 + tolerance / 100)) {
    return {
      orderType: SELL,
      symbol,
      amount: client.amountToPrecision(symbol, (bidBal - average) / bid),
    };
  }
  if (bidBal < average * (1 - tolerance / 100)) {
    return {
      orderType: BUY,
      symbol,
      amount: client.amountToPrecision(symbol, (average - bidBal) / ask),
    };
  }
};

module.exports = {
  orderTypes: {
    SELL,
    BUY,
  },
  createOrderDTO,
};
