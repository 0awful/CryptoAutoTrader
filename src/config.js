require("dotenv").config();

const manditoryConfigKeys = ["API_KEY", "API_SECRET"];
const optionalConfigKeys = ["TOLERANCE"];

let config = {};


// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"
manditoryConfigKeys.forEach((key) => {
  if (process.env[key]) {
    config[key] = process.env[key];
  } else {
    console.error("could not find value for key:", key);
    process.exit(1);
  }
});
optionalConfigKeys.forEach((key) => {
  if (process.env[key]) {
    config[key] = process.env[key];
  } else {
    console.error("could not find value for optional key:", key);
  }
});

module.exports = config;
