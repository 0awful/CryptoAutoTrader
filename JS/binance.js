const Binance = require('binance-api-node').default;
const { API_KEY, API_SECRET, BINANCE_HTTP_URL } = require('./config');

let client;

const getClient = () => {
    if (!client) {
        client = Binance({
            apiKey: API_KEY,
            apiSecret: API_SECRET,
            httpBase: BINANCE_HTTP_URL,
        });
    }
    return client;
};

module.exports = {
    getClient,
};
