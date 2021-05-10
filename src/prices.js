const { getClient } = require('./exchange');
fs = require('fs');

const fetch = async () => {
    const client = getClient();

    const USDRegex = new RegExp('(?<![B])USD(?![TCD])');
    
    const prices = await Promise.all(
        client.symbols.filter((symbol) => USDRegex.test(symbol))
        .map((symbol) => {
            return new Promise(async (res, rej) => {
                try {
                    const orderbook = await client.fetchOrderBook(symbol);
                    let bid = orderbook.bids.length ? orderbook.bids[0][0] : undefined
                    let ask = orderbook.asks.length ? orderbook.asks[0][0] : undefined
                    let spread = (bid && ask) ? ask - bid : undefined
    
                    res({ symbol, bid, ask, spread, quoteCurrency: 'USD', baseCurrency: symbol.replace('/USD', ''), });
                } catch (e) {
                    rej(e);
                }
            })
        })
    )
    
    return prices.reduce((prev, { symbol, bid, ask, spread, baseCurrency, quoteCurrency }) => {
        return { ...prev, [baseCurrency]: { bid, ask, spread, symbol, quoteCurrency, baseCurrency } }
    }, {});
}

module.exports = {
    fetch,
}
