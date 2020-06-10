const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const sql = `
  CREATE TABLE articles (
    id integer PRIMARY KEY,
    path text NOT NULL,
    file_path text NOT NULL,
    slug text NOT NULL,
    body text,
    data text
  );
  CREATE TABLE menus (
    id integer PRIMARY KEY,
    application text NOT NULL,
    data text NOT NULL
  );
  CREATE TABLE videos (
    id integer PRIMARY KEY,
    filename text NOT NULL,
    body text NOT NULL,
    data text
  );
  CREATE TABLE tags (
    id integer PRIMARY KEY,
    name text NOT NULL
  );
  CREATE TABLE articles_tags (
    id integer PRIMARY KEY,
    article_id text NOT NULL,
    tag_id integer NOT NULL
  );
  CREATE TABLE videos_tags (
    id integer PRIMARY KEY,
    video_id text NOT NULL,
    tag_id integer NOT NULL
  );
`;

const config = require('../../config');

const createDatabase = async () => {
  sqlite3.verbose();
  const db = await sqlite.open({
    filename: config.databasePath,
    driver: sqlite3.Database
  });
  await db.exec(sql);
  return db;
};

module.exports = createDatabase;
