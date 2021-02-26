// make sure tables are created in the db

import "reflect-metadata";
import { createConnection } from "typeorm";

import config from '../../config';

import { TextArticle, VideoArticle, RelatedArticle } from '../models';

const prepareDatabase = async () => {
  return await createConnection({
    type: 'sqlite',
    database: config.databasePath,
    entities: [
      TextArticle,
      VideoArticle,
      RelatedArticle
    ],
    synchronize: true,
    logging: !config.isProduction && !config.isBuildingDocs
  });
}

export default prepareDatabase;
