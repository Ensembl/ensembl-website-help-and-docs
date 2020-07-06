import {
  Model,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin
} from 'sequelize';

import sequelize from '../db/sequelize';
import Article from './Article';

class Collection extends Model {
  public id: number;
  public name: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  public addArticle: HasManyAddAssociationMixin<Article, number>;
  public getArticles: HasManyGetAssociationsMixin<Article>;
}

Collection.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  tableName: 'collections',
  sequelize
});

Collection.hasMany(Article, {
  foreignKey: 'collectionId',
  as: 'articles'
});

export default Collection;
