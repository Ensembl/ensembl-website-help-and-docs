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

module.exports = addArticles;
