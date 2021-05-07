const ccxt = require('ccxt');
const { API_KEY, API_SECRET, BINANCE_HTTP_URL } = require('./config');

let client;

const getClient = () => {
    if (!client) {
        client = new ccxt.binanceus({
            apiKey: API_KEY,
            secret: API_SECRET,
            httpBase: BINANCE_HTTP_URL,
            enableRateLimit: true
        });
    }
    return client;
};

module.exports = {
    getClient,
};
