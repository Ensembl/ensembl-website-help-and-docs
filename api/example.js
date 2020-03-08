const parseMarkdown = require('../scripts/parseMarkdown');

// (async function() {
//   const result = await parseMarkdown();
//   console.log(result);
// }());

module.exports = async (req, res) => {
  try {
    const markdownData = await parseMarkdown();

    res.json({
      data: markdownData,
      query: req.query,
      // body: req.body,
      // cookies: req.cookies
    })
  } catch (error) {
    res.status(404);
  }
}
