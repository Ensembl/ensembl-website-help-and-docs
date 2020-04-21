const addArticleTags = async (db, article) => {
  const { slug, tags } = article;
  if (!tags) {
    return;
  }
  await addTags(db, tags);

  for (tag of tags) {
    const { id: savedArticleId } = await db.get('SELECT id FROM articles WHERE filename = ?', slug);
    const { id: savedTagId } = await db.get('SELECT id FROM tags WHERE name = ?', tag);
    await db.run('INSERT INTO articles_tags (article_id, tag_id) VALUES (:articleId, :tagId)', {
      ':articleId': savedArticleId,
      ':tagId': savedTagId
    });
  }
};

const addVideoTags = async (db, video) => {
  const { slug, tags } = video;
  if (!tags) {
    return;
  }
  await addTags(db, tags);

  for (tag of tags) {
    const { id: savedVideoId } = await db.get('SELECT id FROM videos WHERE filename = ?', slug);
    const { id: savedTagId } = await db.get('SELECT id FROM tags WHERE name = ?', tag);
    await db.run('INSERT INTO videos_tags (video_id, tag_id) VALUES (:video_id, :tagId)', {
      ':video_id': savedVideoId,
      ':tagId': savedTagId
    });
  }
};

const addTags = async (db, tags) => {
  for (tag of tags) {
    await addTag(db, tag);
  }
}

const addTag = async (db, tag) => {
  const result = await db.get('SELECT id FROM tags WHERE name = ?', tag);
  const { id: savedTagId } = result || {};

  if (!savedTagId) {
    await db.run('INSERT INTO tags (name) VALUES (?)', tag);
  }
};

module.exports = {
  addArticleTags,
  addVideoTags
};
