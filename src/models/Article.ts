import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";

export abstract class Article extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  filePath: string;

  @Column({ nullable: true })
  url: string;

  // @Column({ type: "simple-array", nullable: true })
  // relatedArticleSlugs: string[];

}


@Entity()
export class TextArticle extends Article {

  type: 'article';

  @Column({ type: 'text' })
  body: string;

  @Column('simple-json')
  data: { relatedArticles?: { path: string }[] };

  @ManyToMany(() => RelatedArticle)
  @JoinTable()
  relatedArticles: RelatedArticle[];

}

@Entity()
export class VideoArticle extends Article {

  type: 'video';

  @Column('simple-json')
  data: { youtube_id: string };

  @ManyToMany(() => RelatedArticle)
  @JoinTable()
  relatedArticles: RelatedArticle[];

  // @ManyToMany(() => TextArticle)
  // textArticles: TextArticle[];

  // @ManyToMany(() => VideoArticle)
  // @JoinTable()
  // videoArticles: VideoArticle[];

}

@Entity()
export class RelatedArticle extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  slug: string;

  @Column({ nullable: true }) // <-- this is a problem
  url: string;

  // @ManyToOne(() => TextArticle, textArticle => textArticle.relatedArticles)
  @ManyToMany(() => TextArticle)
  referencingTextArticles: TextArticle[];

  @ManyToMany(() => VideoArticle)
  referencingVideoArticles: VideoArticle[];

}


/*

class Article extends Model {
  public id: number;
  public title: string;
  public description: string;
  public slug: string;
  public url: string;
  public data: string;
  public body: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;


  // public addVideo: HasManyAddAssociationMixin<Video, number>;
  // public getVideos: HasManyGetAssociationsMixin<Video>;
  // public hasVideos: HasManyHasAssociationMixin<Video, number>;

  public addRelatedArticle: HasManyAddAssociationMixin<Article, number>;
  public getRelatedArticles: HasManyGetAssociationsMixin<Article>;
  public hasRelatedArticles: HasManyHasAssociationMixin<Article, number>;

  public readonly relatedArticles?: Article[];
  // public readonly videos?: Video[];

  // public static associations: {
  //   projects: Association<Article, Video>;
  // };

}

Article.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  title: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: new DataTypes.TEXT,
    allowNull: false,
  },
  slug: {
    type: new DataTypes.STRING(255),
    allowNull: true
  },
  url: {
    type: new DataTypes.STRING(255),
    allowNull: true
  },
  body: {
    type: new DataTypes.TEXT,
    allowNull: true
  },
  data: {
    type: new DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'articles',
  sequelize
});

// Article.belongsToMany(Article, {
//   as: 'relatedArticles',
//   through: 'article_relationships'
// });

// Article.hasMany(Video, {
//   foreignKey: 'articleId',
//   as: 'videos'
// });

export default Article;

*/
