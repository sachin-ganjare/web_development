//installing a simple server using http module and sending a file

//bad practice: http is deprecated!

var http = require('http');
var fs = require('fs');

fs.readFile('./temp/file.html', function (err, data) {

    var server = http.createServer(function (req, res) {
        res.statusCode = 200;
        res.write(data);
        res.end();
    });

    server.listen(3000, function () {
        console.log('Server running on port 3000');
    });
})
