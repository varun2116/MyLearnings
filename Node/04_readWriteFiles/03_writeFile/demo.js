var fs = require('fs');

var data = {
  name: 'Example'
};

fs.writeFile('data.json', JSON.stringify(data), (err) => {
  console.error(err);
});
