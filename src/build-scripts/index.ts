import readSourceFiles from './readSourceFiles';
import addArticles from './addArticles';
// const addVideos = require('./addVideos');
import buildMenus from './buildMenus';
import addMenus from './addMenus';


const buildDatabase = async () => {
  try {
    // const db = await createDatabase();
    const files = await readSourceFiles();
    await addArticles(files.articles);

    const menus = buildMenus();
    await addMenus(menus);

    // await addVideos(db, files.videos);
    // console.log('Documentation database generated successfully');
  } catch (error) {
    console.log('error', error);
    // console.error('Error building the database', error);
  }
};

(async () => {
  await buildDatabase();
})();
