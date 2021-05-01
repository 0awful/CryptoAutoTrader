const { getClient } = require('./binance');

const init = async () => {
    const client = getClient();
    const pingSucceeded = await client.ping();
    if (!pingSucceeded) process.exit(1);
}

module.exports = {
    init,
}