const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let postData = '';
        let pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received`);
        
        request.setEncoding('utf8');

        request.addListener('data', (postDataChunk) => {
            postData += postDataChunk;
            console.log(`received POST data chunk ${postDataChunk}.`);
        });

        request.addListener('end', () => {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;
