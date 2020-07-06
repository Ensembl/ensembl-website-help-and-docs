import fs from 'fs';
// @ts-ignore
import mkdirp from 'mkdirp';

import config from '../../../config';

const saveArticlesIndex = async (index: Object) => {
  await mkdirp(config.indexDirectory);
  fs.writeFileSync(config.articlesIndexPath, JSON.stringify(index));
  console.log('Index file generated successfully');
};

export default saveArticlesIndex;
