const { main } = require("./src/main");
const { TOLERANCE } = require("./src/config");
const keys = require("./users.json");

keys.map((apiData) => main({ ...apiData, tolerance: Number(TOLERANCE) }));
