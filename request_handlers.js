var exec = require('child_process').exec;
var fs = require('fs');

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
    response.end('You\'ve sent: ' + postData);
}

exports.start = start;
exports.upload = upload;
