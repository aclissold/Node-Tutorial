var http = require('http');
var url = require('url');

const PORT = 8888;

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for', pathname, 'received.');
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(PORT);

    console.log('Server now listening on port %d.', PORT);
}

exports.start = start;
