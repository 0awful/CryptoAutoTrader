const { getClient } = require('./binance');

const fetch = () => {
    const binance = getClient();

    return binance.fetchBalance();
}

// returns a promise that can be resolved for the contents of the function
module.exports = {
    fetch,
}
