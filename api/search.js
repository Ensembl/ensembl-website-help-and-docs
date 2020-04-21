// const fs = require('fs');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const searchIndex = require('../scripts/searchIndex');
const getArticleFromDB = require('../scripts/get-from-database/getArticle');

const config = require('../config');

const articlesIndexPath = process.env.DEPLOYMENT === 'NOW'
  ? 'build/indices/articlesIndexName.json'
  : config.articlesIndexPath;
const articlesIndex = require(articlesIndexPath);

const databasePath = process.env.DEPLOYMENT === 'NOW'
  ? 'build/database.db'
  : config.databasePath;

module.exports = async (req, res) => {
  let index;

  const { query } = req.query;
  if (!query) {
    res.status(400);
    return res.json({
      error: 'Query parameter cannot be empty'
    });
  }

  const searchResults = searchIndex(query, articlesIndex);

  try {
    const db = await sqlite.open({
      filename: databasePath,
      driver: sqlite3.Database
    });
    const slugs = searchResults.map(result => result.ref);
    const resultPromises = slugs.map(async (slug) => await getArticleFromDB(db, slug));
    const results = await Promise.all(resultPromises);

    res.json({
      data: results,
      query: req.query,
      // body: req.body,
      // cookies: req.cookies
    })
  } catch (error) {
    res.status(404);
    res.json({
      error,
      searchResults
    })
  }
}
