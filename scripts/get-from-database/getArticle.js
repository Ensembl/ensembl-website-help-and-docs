const path = require('path');
const getVideo = require('./getVideo');

const getArticle = async (db, params) => {
  const { path = '', slug = '' } = params;
  try {
    const match = await db.get('SELECT * FROM articles WHERE path = ? or slug = ?', path, slug);
    if (!match) {
      return;
    }
    match.data = JSON.parse(match.data);
    match.data.related_articles = await findRelatedArticles(db, match);

    // const relatedVideoSlug = match.data['related-video'];

    // if (relatedVideoSlug) {
    //   const relatedVideo = await getVideo(db, relatedVideoSlug);
    //   match.data.relatedVideo = relatedVideo;
    // }

    return match;
  } catch (error) {
    console.log('error getting the document', error);
  }
};

const findRelatedArticles = async (db, article) => {
  const relatedArticlePromises = (article.data.related_articles || [])
    .map(async (relation) =>{
      return await findRelatedArticle(db, article, relation);
    });
  const relatedArticles = await Promise.all(relatedArticlePromises);
  console.log('relatedArticles', relatedArticles);
  return relatedArticles
    .flat()
    .map(relatedArticle =>
      Object.assign({}, relatedArticle, { data: JSON.parse(relatedArticle.data) })
    );
};

const findRelatedArticle = async(db, article, relation) => {
  let relationPath;
  if (relation.docsRootPath) {
    relationPath = relation.docsRootPath;
  } else if (relation.relativePath) {
    const articleDirPath = article.file_path.split('/').slice(0, -1).join('/');
    relationPath = path.join(articleDirPath, relation.relativePath);
  }

  // searching by path
  const sql = `SELECT * FROM articles WHERE file_path = "${relationPath}"`;
  return await db.get(sql);
};


module.exports = getArticle;
