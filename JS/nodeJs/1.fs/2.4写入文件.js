// include file system module

var fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'sample.txt');

var data = "HELLO";

// write data to file sample.html
fs.writeFile(pathname, data, 'ascii',
    // callback function that is called after writing file is done
    function (err) {
        if (err) throw err;
        // if no error
        console.log("Data is written to file successfully.")
    });