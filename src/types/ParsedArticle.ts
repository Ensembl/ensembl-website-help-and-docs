import { Relation } from './Relation';

export type ParsedArticle = {
  type: 'article';
  slug: string;
  title: string;
  description: string;
  url?: string;
  // path: string;
  // filePath: string;
  html: string;
  status: string;
  related_articles?: Relation[];
  related_videos?: Relation[];
};
