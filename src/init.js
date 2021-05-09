const { getClient } = require('./binance');

const init = async () => {
    console.log("init called")
    const client = await getClient();
    const markets = await client.loadMarkets()
    if (!markets) {
        console.log('could not get markets');
        process.exit(1);
    }
    const { status } = await client.fetchStatus();
    if (status != 'ok') {
        console.log('market responded with', status);
        process.exit(1)
    }
}
module.exports = {
    init,
}