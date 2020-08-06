import { Relation } from './Relation';

export type ParsedArticle = {
  title: string;
  description: string;
  path: string;
  filePath: string;
  slug: string;
  html: string;
  status: string;
  related_articles?: Relation[];
  related_videos?: Relation[];
};
