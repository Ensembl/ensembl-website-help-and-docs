const { addArticleTags } = require('./addTags');

const addArticles = async (db, articles) => {
  for (article of articles) {
    await insertArticle(db, article);
    // await addArticleTags(db, article);
  }
};

const insertArticle = async (db, fileData) => {
  const { path, html, ...otherFields } = fileData;
  const sql = `INSERT INTO articles(path, body, data) VALUES (:path, :body, :data)`;
  await db.run(sql, {
    ':path': path,
    ':body': html,
    ':data': JSON.stringify(otherFields)
  });
};


const addParents = (article, articles) => {
  if (!article.parent) {
    return article;
  }
  return buildParents(article, articles);
};

const buildParents = (article, articles, parent) => {
  if (!article.parents) {
    article.parents = [];
  }
  const nextParentName = parent ? parent.parent : article.parent;
  const nextParent = articles.find(({ slug }) => slug === nextParentName);

  if (!nextParent) {
    return article;
  } else {
    article = Object.assign({}, article, { parents: [...article.parents, nextParent.slug] });
    return buildParents(article, articles, nextParent);
  }
};

module.exports = addArticles;
