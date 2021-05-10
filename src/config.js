require('dotenv').config();

const configKeys = [
    'API_KEY',
    'API_SECRET',
    'BASE_HTTP_URL',
];

let config = {};

configKeys.forEach((key) => {
    if (process.env[key]) {
        config[key] = process.env[key];
    } else {
        console.error('could not find value for key:', key);
        process.exit(1)
    }
});

module.exports = config;
