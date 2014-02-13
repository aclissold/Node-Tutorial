var http = require('http');

const PORT = 8888;

function start() {
    function requestListener(req, res) {
        console.log('Request received.');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, world!');
    }

    http.createServer(requestListener).listen(PORT);

    console.log('Server now listening on port %d.', PORT);
}

exports.start = start;
