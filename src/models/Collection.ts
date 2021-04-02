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
