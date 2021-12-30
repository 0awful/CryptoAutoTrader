const { getClient } = require("../exchange");
const { orderTypes } = require("./orderDTO");

const processOrder = async ({ orderType, symbol, amount }) => {
  if (!orderType) throw new Error("orderType is required");
  if (!symbol) throw new Error("symbol is required");
  if (!amount) throw new Error("amount is required");

  const client = getClient();

  try {
    await client.createOrder(symbol, "market", orderType, amount);
  } catch (error) {
    console.log(error);
    throw new Error(
      JSON.stringify({
        message: "Could not fulfill order",
        error: JSON.stringify(error),
        orderType,
        symbol,
        amount,
        cap,
      })
    );
  }
};

module.exports = {
  processOrder,
};
