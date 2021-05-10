const { main } = require('./src/main');
const { API_KEY, API_SECRET, BASE_HTTP_URL } = require('./src/config');

main({
    apiKey: API_KEY,
    secret: API_SECRET,
    httpBase: BASE_HTTP_URL,
    sandboxMode: false,
    enableRateLimit: true,
});
