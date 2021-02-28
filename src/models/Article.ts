import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";

@Entity()
export class Article extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

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

  @Column({ type: 'text', nullable: true })
  body?: string;

  @Column('simple-json', { nullable: true })
  data?: unknown;

  // @Column({ type: "simple-array", nullable: true })
  // relatedArticleSlugs: string[];

}

export type TextArticle = Article & {

  type: 'article';

  data?: {
    relatedArticles: number[];
  }
};

export type VideoArticle = Article & {

  type: 'video';

  data: {
    youtube_id: string;
    relatedArticles?: number[];
  };
};

// @Entity()
// export class TextArticle extends Article {

//   type: 'article';

//   @Column({ type: 'text' })
//   body: string;

//   @Column('simple-json')
//   data: { relatedArticles?: { path: string }[] };

//   @ManyToMany(() => RelatedArticle)
//   @JoinTable()
//   relatedArticles: RelatedArticle[];

// }

// @Entity()
// export class VideoArticle extends Article {

//   type: 'video';

//   @Column('simple-json')
//   data: { youtube_id: string };

//   @ManyToMany(() => RelatedArticle)
//   @JoinTable()
//   relatedArticles: RelatedArticle[];

//   // @ManyToMany(() => TextArticle)
//   // textArticles: TextArticle[];

//   // @ManyToMany(() => VideoArticle)
//   // @JoinTable()
//   // videoArticles: VideoArticle[];

// }
