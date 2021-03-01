// make sure tables are created in the db

import "reflect-metadata";
import { createConnection } from "typeorm";

import config from '../../config';

import { Article, Collection } from '../models';

const prepareDatabase = async () => {
  return await createConnection({
    type: 'sqlite',
    database: config.databasePath,
    entities: [
      Article,
      Collection
    ],
    synchronize: true,
    logging: !config.isProduction && !config.isBuildingDocs
  });
}

export default prepareDatabase;
