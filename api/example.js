const parseMarkdown = require('../scripts/parseMarkdown');

module.exports = async (req, res) => {
  const filePath = req.query.file;
  if (!filePath) {
    res.status(400);
    return res.json({
      error: 'File parameter cannot be empty'
    });
  }

  try {
    const markdownData = await parseMarkdown(filePath);

    res.json({
      data: markdownData,
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
};
