var http = require('http');
var url = require('url');

const PORT = 8888;

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('Request for', pathname, 'received.');

        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log('Received POST data chunk', postDataChunk + '.');
        });

        request.addListener('end', function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(PORT);

    console.log('Server now listening on port %d.', PORT);
}

exports.start = start;
