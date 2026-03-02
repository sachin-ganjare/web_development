//using fs module for reading a file

var fs = require('fs')

fs.readFile('temp/file.html', 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });