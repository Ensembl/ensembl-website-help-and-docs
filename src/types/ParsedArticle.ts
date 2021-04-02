import { Relation } from './Relation';

export type ParsedArticle = {
  type: 'article';
  slug: string;
  title: string;
  description: string;
  url?: string;
  path: string;
  // filePath: string;
  html: string;
  collection?: string;
  status: string;
  related_articles?: { href: string }[];
  related_videos?: Relation[];
};
