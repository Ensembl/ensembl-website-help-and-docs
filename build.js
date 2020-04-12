const fs = require('fs');
const mkdirp = require('mkdirp');

const generateIndex = require('./scripts/generateIndex');
const buildDatabase = require('./scripts/generateDatabase');

(async () => {
  const index = await generateIndex();
  const destination = await mkdirp('./build/indices');
  fs.writeFile('./build/indices/index.json', JSON.stringify(index), err => {
    if (err) throw err;
    console.log('Index file generated successfully')
  });

  await buildDatabase();
})();
