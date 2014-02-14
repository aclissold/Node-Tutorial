var http = require('http');
var url = require('url');

const PORT = 8888;

function start(route, handle) {
    function requestListener(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for', pathname, 'received.');

        route(handle, pathname, res);
    }

    http.createServer(requestListener).listen(PORT);

    console.log('Server now listening on port %d.', PORT);
}

exports.start = start;
