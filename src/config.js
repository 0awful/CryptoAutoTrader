require("dotenv").config();

const manditoryConfigKeys = ["API_KEY", "API_SECRET"];
const optionalConfigKeys = ["TOLERANCE"];

let config = {};

manditoryConfigKeys.forEach((key) => {
  if (process.env[key]) {
    config[key] = process.env[key];
  } else {
    console.error("could not find value for key:", key);
    process.exit(1);
  }
});
optionalConfigKeys((key) => {
  if (process.env[key]) {
    config[key] = process.env[key];
  } else {
    console.error("could not find value for optional key:", key);
  }
});

module.exports = config;
