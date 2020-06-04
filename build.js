const buildIndex = require('./scripts/build-index');
const buildDatabase = require('./scripts/build-database');
const copyAssets = require('./scripts/copy-assets');

(async () => {
  // await buildDatabase();
  await copyAssets();
  // await buildIndex();
})();
