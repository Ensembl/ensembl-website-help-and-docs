const express = require('express');
const cors = require('cors');
const app = express();

const config = require('../config');

app.use(cors());
app.disable('x-powered-by');

const getArticle = require('../api/article');
const search = require('../api/search');

// app.use(express.static(path.join(__dirname, '../_site')));
app.use('/images', express.static(config.buildImagesPath));

app.use('/api/article', getArticle);
app.use('/api/search', search);

module.exports = app;
