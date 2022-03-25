// include node fs module
var fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'newfile_1.txt');
 
// open function with filename, file opening mode and callback function
fs.open(pathname, 'w', function (err, file) {
  if (err) throw err;
  console.log('File is opened in write mode.');
});