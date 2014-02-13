var http = require('http');

function requestListener(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!');
}

http.createServer(requestListener).listen(8888);
