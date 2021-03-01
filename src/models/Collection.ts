import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";

import { Article } from './Article';

@Entity()
export class Collection extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany('Article', 'collection', { eager: true })
  articles: Article[]

}


/*

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

*/

export default Collection;
