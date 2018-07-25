fs = require('fs');

console.log('Example for asynchronous call');
function dataMethod(err, data){
  console.log('data:', data);
}
fs.readdir('c:/', dataMethod); //dataMethod is a callback method. it will be called after the data is received

console.log('this comes after')
