const { addArticleTags } = require('./addTags');

const addArticles = async (db, articles) => {
  for (article of articles) {
    article = addParents(article, articles);
    await insertArticle(db, article);
    await addArticleTags(db, article);
  }
};

const insertArticle = async (db, fileData) => {
  const { html, ...otherFields } = fileData;
  const sql = `INSERT INTO articles(filename, body, data) VALUES (:filename, :body, :data)`;
  await db.run(sql, {
    ':filename': fileData.slug,
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
