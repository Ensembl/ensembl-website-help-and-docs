import express from 'express';
import cors from 'cors';
const app = express();

import config from '../../config';

app.use(cors());
app.disable('x-powered-by');

import { getArticle } from '../controllers/articlesController';
import { getCollection } from '../controllers/collectionsController';
import { getMenu } from '../controllers/menusController';
import { search } from '../controllers/searchController';
import { healthcheck } from '../controllers/healthcheckController';

app.use('/api/images', express.static(config.buildImagesPath));

app.use('/api/article', getArticle);
app.use('/api/collection', getCollection);
app.use('/api/menus', getMenu);
app.use('/api/search', search);
app.use('/api/healthcheck', healthcheck);

export default app;
