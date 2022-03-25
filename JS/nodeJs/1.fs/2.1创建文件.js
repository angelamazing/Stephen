// include node fs module
const fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'newfile.txt');


let data = 'Learn Node FS module1'
// writeFile function with filename, content and callback function
fs.writeFile(pathname, data, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
