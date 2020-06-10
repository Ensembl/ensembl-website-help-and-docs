const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const config = require('../config');

const getArticleFromDB = require('../scripts/get-from-database/getArticle');
const databasePath = config.databasePath;

const getArticle = async (req, res) => {
  const slug = req.query.slug;
  const filePath = req.query.path;
  if (!filePath && !slug) {
    res.status(400);
    return res.json({
      error: 'Path and slug parameters cannot both be empty'
    });
  }

  try {
    const db = await sqlite.open({
      filename: databasePath,
      driver: sqlite3.Database
    });
    const match = await getArticleFromDB(db, { path: filePath, slug });

    if (match) {
      res.json({
        path: match.path,
        slug: match.slug,
        body: match.body,
        data: match.data
      });
    } else {
      res.status(404);
      res.json({
        error: `Article not found`
      });
    }
    await db.close();
  } catch (error) {
    console.error('Error opening the database', error);
    console.error('Database path:', databasePath);
    res.status(500);
    res.json({
      error: 'There was an error processing your request'
    })
  }
};

module.exports = getArticle;
