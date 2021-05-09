const SELL = 'SELL';
const BUY = 'BUY';

const createOrderDTO = ({ symbol, bidBal, bid, ask }, average) => {
    if (bidBal > average) {
        return {
            orderType: SELL,
            symbol,
            amount: (bidBal - average) / bid, // note: might not have apropriate precision
        }
    } else {
        return {
            orderType: BUY,
            symbol,
            amount: (average - bidBal) / ask, // note: might not have apropriate precision
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