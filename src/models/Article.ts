import {
  Model,
  Association,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  DataTypes
} from 'sequelize';

import sequelize from '../db/sequelize';
import Video from './Video';

class Article extends Model {
  public id: number;
  public title: string;
  public description: string;
  public path: string;
  public file_path: string;
  public slug: string;
  public body: string;
  public data: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;


  public addVideo: HasManyAddAssociationMixin<Video, number>;
  public getVideos: HasManyGetAssociationsMixin<Video>;
  public hasVideos: HasManyHasAssociationMixin<Video, number>;

  public getRelatedArticles: HasManyGetAssociationsMixin<Article>;
  public hasRelatedArticles: HasManyHasAssociationMixin<Article, number>;

  public readonly videos?: Video[];

  public static associations: {
    projects: Association<Article, Video>;
  };

}

Article.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: new DataTypes.TEXT('medium'),
    allowNull: false,
  },
  path: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  file_path: {
    type: new DataTypes.STRING(255),
    allowNull: true
  },
  slug: {
    type: new DataTypes.STRING(255),
    allowNull: true
  },
  body: {
    type: new DataTypes.TEXT('long'),
    allowNull: true
  },
  data: {
    type: new DataTypes.TEXT('long'),
    allowNull: true
  }
}, {
  tableName: 'articles',
  sequelize
});

Article.hasMany(Article, {
  as: 'relatedArticles'
});

Article.hasMany(Video, {
  foreignKey: 'articleId',
  as: 'videos'
});

sequelize.sync();

export default Article;
