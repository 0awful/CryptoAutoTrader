const { getClient } = require('../binance');

const SELL = 'SELL';
const BUY = 'BUY';

const createOrderDTO = ({ symbol, bidBal, bid, ask }, average) => {
    const client = getClient();
    if (bidBal > average) {
        return {
            orderType: SELL,
            symbol,
            amount: client.amountToPrecision(symbol, (bidBal - average) / bid),
        }
    } else {
        return {
            orderType: BUY,
            symbol,
            amount: client.amountToPrecision(symbol, (average - bidBal) / ask),
        }
    }
}

module.exports = {
    orderTypes: {
        SELL,
        BUY,
    },
    createOrderDTO,
}