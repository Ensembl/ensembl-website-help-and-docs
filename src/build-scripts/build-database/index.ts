import prepareDatabase from '../../db/prepareDatabase';
import readSourceFiles from './readSourceFiles';
import addArticles from './addArticles';
import buildMenus from './buildMenus';
// import addMenus from './addMenus';

const buildDatabase = async () => {
  try {
    await prepareDatabase();
    const menus = await buildMenus();
    const files = await readSourceFiles(menus);
    await addArticles(files);
    // await addMenus(menus);
    // console.log('Menus added to the database');

    // console.log('Documentation database generated successfully');

  } catch (error) {
    console.error('Error building the database', error);
  }
};

export default buildDatabase;
