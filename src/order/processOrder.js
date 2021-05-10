const { getClient } = require('../exchange');
const { SELL, BUY } = require('./orderDTO');

const processOrder = ({ orderType, symbol, amount }) => {
    const client = getClient();

    if (orderType === SELL) {
        return client.createMarketSellOrder(symbol, amount);
    }
    if (orderType === BUY) {
        return client.createMarketBuyOrder(symbol, amount);
    }
}

module.exports = {
    processOrder,
}