function route(handle, pathname, res, postData) {
    console.log('About to route a request for', pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](res, postData);
    } else {
        console.log('No request handler found for', pathname);
        res.writeHead(404, 'Not found', {'Content-Type': 'text/plain'});
        res.end('404 Not found');
    }
}

exports.route = route;
