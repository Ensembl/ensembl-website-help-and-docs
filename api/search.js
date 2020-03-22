const fs = require('fs');
const searchIndex = require('../scripts/searchIndex');
const parseMarkdown = require('../scripts/parseMarkdown');

const index = JSON.parse(fs.readFileSync('./index.json', 'utf-8'));

module.exports = async (req, res) => {
  const search = req.query.query;
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
      error: `File ${filePath} not found`
    })
  }
}
