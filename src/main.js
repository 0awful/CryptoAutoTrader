const { algo } = require('./algo');
const { init } = require('./init');

const main = async () => {
    await init();
    await algo();
}

module.exports = {
    main,
}