import readSourceFiles from './readSourceFiles';
import addArticles from './addArticles';
// const addVideos = require('./addVideos');
// const buildMenus = require('./buildMenus');
// const addMenus = require('./addMenus');


const buildDatabase = async () => {
  try {
    // const db = await createDatabase();
    const files = await readSourceFiles();
    // console.log('files', files);
    await addArticles(files.articles);

    // const menus = buildMenus();
    // await addMenus(db, menus);

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
