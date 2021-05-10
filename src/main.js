const { algo } = require('./algo');
const { init } = require('./init');

const main = async ({
    apiKey = '',
    secret = '',
    httpBase = '',
    sandboxMode,
    enableRateLimit,
}) => {
    await init({
        apiKey,
        secret,
        httpBase,
        sandboxMode,
        enableRateLimit,
    });
    await algo();
}

module.exports = {
    main,
}