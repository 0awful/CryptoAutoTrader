const { algo } = require("./algo");
const { init } = require("./init");

const main = async ({
  apiKey,
  secret,
  sandboxMode = false,
  enableRateLimit = true,
}) => {
  await init({
    apiKey,
    secret,
    sandboxMode,
    enableRateLimit,
  });
  await algo();
};

module.exports = {
  main,
};
