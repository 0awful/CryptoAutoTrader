const { getClient } = require("../exchange");

const SELL = "SELL";
const BUY = "BUY";

const createOrderDTO = ({ symbol, bidBal, bid, ask }, average) => {
  if (!symbol) throw new Error("symbol is required");
  if (bidBal === undefined) throw new Error("bidBal is required");
  if (!bid) throw new Error("bid is required");
  if (!ask) throw new Error("ask is required");
  if (!average) throw new Error("average is required");

  const client = getClient();

  const amount =
    bidBal > average
      ? client.amountToPrecision(symbol, (bidBal - average) / bid)
      : client.amountToPrecision(symbol, (bidBal - average) / ask);
  console.log({ amount, cap: client.markets[symbol]["limits"]["cost"]["min"] });
  if (Math.abs(amount) < client.markets[symbol]["limits"]["cost"]["min"])
    return;

  return {
    orderType: bidBal - average ? SELL : BUY,
    symbol,
    amount,
  };
};

module.exports = {
  orderTypes: {
    SELL,
    BUY,
  },
  createOrderDTO,
};
