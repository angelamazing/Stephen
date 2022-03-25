var fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'newfile.txt');
 
// appendFile function with filename, content and callback function
fs.appendFile(pathname, '2021', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});