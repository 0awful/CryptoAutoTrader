const { getClient } = require("../exchange");


const SELL = "sell";
const BUY = "buy";

const createOrderDTO = ({ symbol, bidBal, bid, ask, bal = 0 }, average) => {
  if (!symbol) throw new Error("symbol is required");
  if (bidBal === undefined) throw new Error("bidBal is required");
  if (!bid) throw new Error("bid is required");
  if (!ask) throw new Error("ask is required");
  if (!average) throw new Error("average is required");

  if (!bal) return;

  const client = getClient();

  const price = client.priceToPrecision(symbol, bid);
  const roughAmount = Math.abs(((bidBal - average) / bidBal) * bal);
  const amount = client.amountToPrecision(symbol, roughAmount);
  const purchasePrice = amount * price;

  const minAmount = client.markets[symbol]["limits"]["amount"]["min"];
  const minCost = client.markets[symbol]["limits"]["cost"]["min"];

  if (amount < minAmount) return;
  if (purchasePrice < minCost) return;

  return {
    orderType: bidBal - average > 0 ? SELL : BUY,
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
