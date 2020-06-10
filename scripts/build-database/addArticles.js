const { addArticleTags } = require('./addTags');

const addArticles = async (db, articles) => {
  for (let article of articles) {
    await insertArticle(db, article);
    // await addArticleTags(db, article);
  }
  // await addArticleRelationships(db);
};

const insertArticle = async (db, fileData) => {
  const { path, filePath, slug, html, ...otherFields } = fileData;
  const sql = `INSERT INTO articles(path, file_path, slug, body, data) VALUES (:path, :filePath, :slug, :body, :data)`;
  await db.run(sql, {
    ':path': path,
    ':filePath': filePath,
    ':slug': slug,
    ':body': html,
    ':data': JSON.stringify(otherFields)
  });
};

module.exports = addArticles;
