const getVideo = async (db, slug) => {
  try {
    const match = await db.get('SELECT * FROM videos WHERE filename = ?', slug);
    if (!match) {
      return;
    }
    match.data = JSON.parse(match.data);
    return match;
  } catch (error) {
    console.log('error getting the document', error);
  }
};


module.exports = getVideo;
