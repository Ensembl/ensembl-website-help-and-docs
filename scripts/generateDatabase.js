const fs = require('fs');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

const config = require('../config');

const parseMarkdown = require('./parseMarkdown');

const readMarkdownFiles = async () => {
  const dirPath = path.resolve(__dirname, '../markdown');
  const promisedData = fs.readdirSync(dirPath)
    .map(fileName => fileName.replace(/\.md$/, ''))
    .map(async fileName => {
      const fileData = await parseMarkdown(fileName);
      return Object.assign({}, fileData, { id: fileName });
    });
  return await Promise.all(promisedData);
};

const getDbPath = () => path.resolve(config.databaseOutputPath, config.databaseName);

const createDatabase = async () => {
  const createTableExpression = `
    CREATE TABLE documents (
      id integer PRIMARY KEY,
      name text NOT NULL,
      body text NOT NULL,
      data text
    );
    CREATE TABLE categories (
      id integer PRIMARY KEY,
      name text NOT NULL
    );
    CREATE TABLE documents_categories (
      id integer PRIMARY KEY,
      document_id text NOT NULL,
      category_id integer NOT NULL
    );
  `;
  sqlite3.verbose();
  const db = await sqlite.open({
    filename: getDbPath(),
    driver: sqlite3.Database
  });
  const { count } = await db.get(`SELECT count(name) as count FROM sqlite_master WHERE type='table' AND name='documents'`);

  if (!count) {
    await db.exec(createTableExpression);
  }
  return db;
};

const populateDatabase = async (db, files) => {
  for (fileData of files) {
    await insertDocumentRow(db, fileData);
    await insertCategory(db, fileData);
    await addDocumentCategory(db, fileData);
  }
};

const insertDocumentRow = async (db, fileData) => {
  const { html, ...otherFields } = fileData;
  const sql = `INSERT INTO documents(name, body, data) VALUES (:name, :body, :data)`;
  await db.run(sql, {
    ':name': fileData.id,
    ':body': html,
    ':data': JSON.stringify(otherFields)
  });
};

const insertCategory = async (db, fileData) => {
  const { category } = fileData;
  if (!category) {
    return;
  }
  let result = await db.get('SELECT id FROM categories WHERE name = ?', category);
  const { id: savedCategoryId } = result || {};
  if (!savedCategoryId) {
    await db.run('INSERT INTO categories (name) VALUES (?)', category);
  }
}

const addDocumentCategory = async (db, fileData) => {
  const { id: documentName, category } = fileData;
  if (!category) {
    return;
  }
  const { id: savedDocumentId } = await db.get('SELECT id FROM documents WHERE name = ?', documentName);
  const { id: savedCategoryId } = await db.get('SELECT id FROM categories WHERE name = ?', category);
  await db.run('INSERT INTO documents_categories (document_id, category_id) VALUES (:documentId, :categoryId)', {
    ':documentId': savedDocumentId,
    ':categoryId': savedCategoryId
  });
};

(async () => {
  const db = await createDatabase();
  const files = await readMarkdownFiles();
  populateDatabase(db, files);
})();

module.exports = {
  getDbPath
};

// (async () => {
//   const db = await sqlite.open({
//     filename: getDbPath(),
//     driver: sqlite3.Database
//   });
//   const result = await db.all('SELECT * FROM documents_categories');
//   console.log(result);
// })();
