import sqlite from 'sqlite3';
import { Sequelize } from 'sequelize';

import config from '../../config';

sqlite.verbose();
new sqlite.Database(config.databasePath);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.databasePath
});

export default sequelize;
