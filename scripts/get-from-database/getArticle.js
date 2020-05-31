const getVideo = require('./getVideo');

const getArticle = async (db, path) => {
  try {
    const match = await db.get('SELECT * FROM articles WHERE path = ?', path);
    if (!match) {
      return;
    }
    match.data = JSON.parse(match.data);

    // const relatedVideoSlug = match.data['related-video'];

    // if (relatedVideoSlug) {
    //   const relatedVideo = await getVideo(db, relatedVideoSlug);
    //   match.data.relatedVideo = relatedVideo;
    // }

    return match;
  } catch (error) {
    console.log('error getting the document', error);
  }
};


module.exports = getArticle;
