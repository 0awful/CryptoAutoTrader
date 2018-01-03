const algo = require('./Main.js');

// in miliseconds
let timeout = 9000000;

algo.main();
setInterval(algo.main, timeout);
