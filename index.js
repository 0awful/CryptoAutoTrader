const { main } = require("./src/main");
const { API_KEY, API_SECRET, TOLERANCE } = require("./src/config");

main({
  apiKey: API_KEY,
  secret: API_SECRET,
  tolerance: Number(TOLERANCE),
});
