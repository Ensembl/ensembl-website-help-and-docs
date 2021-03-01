import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";

import { Collection } from './Collection';

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

  @ManyToOne('Collection', 'articles')
  collection: Collection;

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
