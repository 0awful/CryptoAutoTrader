const algo = require('./Main.js');

// in miliseconds
let timeout = 900000;

algo.main();
setInterval(algo.main, timeout);
