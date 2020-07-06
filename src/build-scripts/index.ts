import prepareDatabase from '../db/prepareDatabase';
import readSourceFiles from './readSourceFiles';
import addArticles from './addArticles';
import buildMenus from './buildMenus';
import addMenus from './addMenus';
import buildIndex from './build-index';
import copyAssets from './copy-assets';


const buildDatabase = async () => {
  try {
    await prepareDatabase();
    const files = await readSourceFiles();
    await addArticles(files.articles);
    console.log('Documentation database generated successfully');

    const menus = buildMenus();
    await addMenus(menus);

    await buildIndex();

    copyAssets();
  } catch (error) {
    console.error('Error building the database', error);
  }
};

(async () => {
  await buildDatabase();
})();
