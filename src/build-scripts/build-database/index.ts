import prepareDatabase from '../../db/prepareDatabase';
import readSourceFiles from './readSourceFiles';
import addArticles from './addArticles';
import buildMenus from './buildMenus';
import addMenus from './addMenus';

const buildDatabase = async () => {
  try {
    await prepareDatabase();
    const files = await readSourceFiles();
    await addArticles(files.articles);
    console.log('Documentation database generated successfully');

    const menus = buildMenus();
    await addMenus(menus);
    console.log('Menus added to the database');

  } catch (error) {
    console.error('Error building the database', error);
  }
};

export default buildDatabase;
