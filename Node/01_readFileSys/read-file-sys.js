fs = require('fs');

console.log('Example for synchronous call');
data = fs.readdirSync('c:/');
console.log('data:',data);

console.log('this comes after')
