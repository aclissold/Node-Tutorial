var exec = require('child_process').exec,
    fs = require('fs'),
    querystring = require('querystring');

function start(response) {
    console.log('Request handler "start" was called.');

    fs.readFile('start.html', function(err, data) {
        response.writeHead(200, 'OK', {'Content-Type': 'text/html'});
        response.end(data);
        if (err) {
            console.log('Error opening file:\n', err);
            process.exit(err['errno']);
        }
    });

}

function upload(response, postData) {
    console.log('Request handler "upload" was called.');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('You\'ve sent: ' + querystring.parse(postData).text);
}

function show(response, postData) {
    console.log('Request handler "show" was called.');
    fs.readFile('/tmp/test.png', 'binary', function(err, file) {
        if (err) {
            response.writeHead(500, 'Internal Server Error', {'Content-Type': 'text/plain'});
            response.end(err + '');
        } else {
            response.writeHead(200, 'OK', {'Content-Type': 'image/png'});
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
