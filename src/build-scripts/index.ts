import buildDatabase from './build-database';
import buildIndex from './build-index';
import copyAssets from './/copy-assets';

const build = async () => {
  try {
    await buildDatabase();
    await buildIndex();
    // await copyAssets();
  } catch (error) {
    console.error('Error building the project', error);
  }
};

(async () => {
  try {
    await build();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
