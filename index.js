var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req, url)
    res.end();
});
server.listen();



/* const path = require('path');

const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');

process.argv.length = 1;
process.argv.push(nextPath, 'start');

require(nextPath); */

/* const path = require('path');
const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');
process.argv.length = 1;
process.argv.push(nextPath, 'start');
process.env.NODE_ENV = 'production';
process.env.PORT = 8888
require(nextPath); */





