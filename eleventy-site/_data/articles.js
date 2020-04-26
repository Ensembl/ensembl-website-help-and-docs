const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const config = require('../../config');
const getArticleFromDB = require('../../scripts/get-from-database/getArticle');

const getArticles = async () => {

  const db = await sqlite.open({
    filename: config.databasePath,
    driver: sqlite3.Database
  });

  const slugs = await db.all('SELECT filename FROM articles');
  const articlePromises = slugs.map(async ({ filename }) => await getArticleFromDB(db, filename));
  const articles = await Promise.all(articlePromises);

  return articles;
};

module.exports = getArticles;
