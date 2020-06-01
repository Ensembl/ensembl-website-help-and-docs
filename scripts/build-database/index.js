const createDatabase = require('./createDatabase');
const readSourceFiles = require('./readSourceFiles');
const addArticles = require('./addArticles');
const addVideos = require('./addVideos');
const buildMenu = require('./buildMenu');

const buildDatabase = async () => {
  try {
    // const db = await createDatabase();
    // const files = await readSourceFiles();
    // await addArticles(db, files.articles);

    buildMenu();

    // await addVideos(db, files.videos);
    // console.log('Documentation database generated successfully');
  } catch (error) {
    console.log('error', error);
    // console.error('Error building the database', error);
  }
};

module.exports = buildDatabase;
