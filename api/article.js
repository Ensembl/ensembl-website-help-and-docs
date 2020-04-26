const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const config = require('../config');

const getArticleFromDB = require('../scripts/get-from-database/getArticle');
const databasePath = process.env.DEPLOYMENT === 'NOW' ? 'build/database.db' : config.databasePath;

const getArticle = async (req, res) => {
  const filePath = req.query.file;
  if (!filePath) {
    res.status(400);
    return res.json({
      error: 'File parameter cannot be empty'
    });
  }

  try {
    const db = await sqlite.open({
      filename: databasePath,
      driver: sqlite3.Database
    });
    const match = await getArticleFromDB(db, filePath);

    if (match) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({
        body: match.body,
        data: match.data,
        query: req.query
      });
    } else {
      res.status(404);
      res.json({
        error: `File ${filePath} not found`
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
