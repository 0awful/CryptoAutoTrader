const { main } = require("./src/main");
require("dotenv").config();

main({ apiKey: process.env.API_KEY, secret: process.env.API_SECRET });
