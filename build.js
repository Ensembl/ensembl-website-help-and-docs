const buildIndex = require('./scripts/build-index');
const buildDatabase = require('./scripts/build-database');

(async () => {
  await buildDatabase();
  await buildIndex();
})();
