import prepareDatabase from '../../db/prepareDatabase';
import readSourceFiles from './readSourceFiles';
import addArticles from './addArticles';
import buildMenus from './buildMenus';
import addMenus from './addMenus';
import { setInternalLinks } from './set-internal-links';

const buildDatabase = async () => {
  try {
    await prepareDatabase();
    const menus = await buildMenus();
    const files = await readSourceFiles(menus);
    await addArticles(files);
    await addMenus(menus);
    await setInternalLinks();

    console.log('Documentation database generated successfully');
  } catch (error) {
    console.error('Error building the database', error);
    process.exit(1);
  }
};

export default buildDatabase;
