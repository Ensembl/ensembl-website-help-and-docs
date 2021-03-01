import "reflect-metadata";
import { createConnection } from "typeorm";

import config from '../../config';

import {
  Article,
  Collection,
  Menu
} from '../models';

const prepareDatabase = async () => {
  return await createConnection({
    type: 'sqlite',
    database: config.databasePath,
    entities: [
      Article,
      Collection,
      Menu
    ],
    synchronize: true,
    logging: !config.isProduction && !config.isBuildingDocs
  });
}

export default prepareDatabase;
