const createDatabase = require('./createDatabase');
const readSourceFiles = require('./readSourceFiles');
const addArticles = require('./addArticles');
const addVideos = require('./addVideos');
const buildMenus = require('./buildMenus');
const addMenus = require('./addMenus');

const buildDatabase = async () => {
  try {
    const db = await createDatabase();
    const files = await readSourceFiles();
    await addArticles(db, files.articles);

    const menus = buildMenus();
    await addMenus(db, menus);

    // await addVideos(db, files.videos);
    // console.log('Documentation database generated successfully');
  } catch (error) {
    console.log('error', error);
    // console.error('Error building the database', error);
  }
};

module.exports = buildDatabase;
