var http = require('http');
var url = require('url');

const PORT = 8888;

function start(route) {
    function requestListener(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for', pathname, 'received.');

        route(pathname);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, world!');
    }

    http.createServer(requestListener).listen(PORT);

    console.log('Server now listening on port %d.', PORT);
}

exports.start = start;
