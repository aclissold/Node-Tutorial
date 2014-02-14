var exec = require('child_process').exec;

function start(res) {
    console.log('Request handler "start" was called.');

    exec('ls -lah', function(error, stdout, stderr) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(stdout);
    });
}

function upload(res) {
    console.log('Request handler "upload" was called.');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Upload');
}

exports.start = start;
exports.upload = upload;
