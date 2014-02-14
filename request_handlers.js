var exec = require('child_process').exec;
var fs = require('fs');

function start(res) {
    console.log('Request handler "start" was called.');

    fs.readFile('start.html', function(err, data) {
        res.writeHead(200, 'OK', {'Content-Type': 'text/html'});
        res.end(data);
        if (err) {
            console.log('Error opening file:\n', err);
            process.exit(err['errno']);
        }
    });

}

function upload(res, postData) {
    console.log('Request handler "upload" was called.');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('You\'ve sent: ' + postData);
}

exports.start = start;
exports.upload = upload;
