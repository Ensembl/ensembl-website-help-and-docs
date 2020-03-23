const fs = require('fs');
const path = require('path');
const searchIndex = require('../scripts/searchIndex');
const parseMarkdown = require('../scripts/parseMarkdown');

// const indexPath = path.resolve(__dirname, './index.json');
// const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

module.exports = async (req, res) => {
  let index;
  try {
    index = require('build/indices/index.json');
  } catch (error) {
    const files = fs.readdirSync('.');
    res.json({ error, files });
  }

  const { query } = req.query;
  if (!query) {
    res.status(400);
    return res.json({
      error: 'Query parameter cannot be empty'
    });
  }

  try {
    const searchResults = searchIndex(query, index);
    const filePaths = searchResults.map(result => result.ref);
    const resultPromises = filePaths.map(parseMarkdown);
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
      error
    })
  }
}
