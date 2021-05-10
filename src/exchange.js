const ccxt = require("ccxt");

let client;

const getClient = () => {
  if (!client) throw new Error("client requested before instantiation");
  return client;
};

const initClient = ({
  apiKey,
  secret,
  httpBase,
  sandboxMode,
  enableRateLimit = true,
}) => {
  if (client) throw new Error("double client instantiation error");
  client = new ccxt.binanceus({
    apiKey,
    secret,
    httpBase,
    enableRateLimit,
    options: {
      createMarketBuyOrderRequiresPrice: false,
    },
  });
  client.setSandboxMode(sandboxMode);
};

module.exports = {
  getClient,
  initClient,
};
