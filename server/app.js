const path = require('path');
const express = require('express');
const app = express();

const getArticle = require('../api/article');
const search = require('../api/search');

app.use('/images', express.static(path.join(__dirname, '../images')));

app.use('/api/article', getArticle);
app.use('/api/search', search);

module.exports = app;
