const { addVideoTags } = require('./addTags');

const addVideos = async (db, videos) => {
  for (video of videos) {
    await insertVideo(db, video);
    await addVideoTags(db, video);
  }
};

const insertVideo = async (db, video) => {
  const { html, ...otherFields } = video;
  const sql = `INSERT INTO videos(filename, body, data) VALUES (:filename, :body, :data)`;
  await db.run(sql, {
    ':filename': video.slug,
    ':body': html,
    ':data': JSON.stringify(otherFields)
  });
};

module.exports = addVideos;
