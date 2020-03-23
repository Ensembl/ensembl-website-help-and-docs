const fs = require('fs');

const generateIndex = require('./scripts/generateIndex');

(async () => {
  const index = await generateIndex();
  fs.writeFile('index.js', (module.exports = index), err => {
    if (err) throw err;
    console.log('Index file generated successfully')
  })
})();
