var fs = require('fs');
 
fs.rename('output.txt', 'sample.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed.');
});