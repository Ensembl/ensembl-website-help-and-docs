import sqlite from 'sqlite3';
import { Sequelize } from 'sequelize';

import config from '../../config';

const shouldLog = !config.isProduction && !config.isBuildingDocs;

if (shouldLog) {
  sqlite.verbose();
}

new sqlite.Database(config.databasePath);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.databasePath,
  logging: shouldLog && console.log
});

export default sequelize;
