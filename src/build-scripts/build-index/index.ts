import readSourceFiles from './readSourceFiles';
import indexArticles from './indexArticles';
import saveArticlesIndex from './saveArticlesIndex';

const buildIndex = async () => {
  try {
    const files = await readSourceFiles();
    const articlesIndex = indexArticles(files.articles);
    await saveArticlesIndex(articlesIndex);
    console.log('Search index for articles generated successfully');
  } catch (error) {
    console.error('Error building the database', error);
  }
};

export default buildIndex;
