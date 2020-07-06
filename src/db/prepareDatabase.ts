// make sure tables are created in the db

import * as models from '../models';
import sequelize from './sequelize';

const prepareDatabase = async () => {
  await sequelize.sync();
}

export default prepareDatabase;
