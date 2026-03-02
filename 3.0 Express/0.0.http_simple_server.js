//installing a simple server using http module

//bad practice: it is deprecated!

var http = require('http');

var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(3000, function() {
    console.log('Server running on port 3000');
});