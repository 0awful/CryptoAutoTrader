const algo = require('./Main.js');
var http = require('http'),
  httpserv = http.createServer(handleHTTP),
  port = 8006,
  host = 'localhost',
  fs = require('fs'),
  index = fs.readFileSync('../index.html'),
  io = require('socket.io').listen(httpserv),
  ENV = 'main';

function handleHTTP(req, res) {
  console.log('request starting ');
  if (req.method === 'GET') {
    console.log('found get request', req.url);
    if (req.url == '/') {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(index);
    } else {
      res.writeHead(403);
      res.end('403');
    }
  } else {
    res.writeHead(403);
    res.end('403');
  }
}

function handleIO(socket) {
  function disconnect() {
    console.log('disconnect');
  }

  function fetchInfo() {}
}

io.on('connection', handleIO);

let timeInMinutes = 30;
// in miliseconds
let timeout = timeInMinutes * 60000;
console.log('server starting');
httpserv.listen(port, host);

if (ENV !== 'test') {
  algo.main();
  setInterval(algo.main, timeout);
}
