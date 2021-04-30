export type IndexPageItem = {
  title: string;
  summary: string;
  href: string;
};

export type ParsedIndexPage = {
  type: 'index';
  slug: string;
  title: string;
  description: string;
  url: string;
  path: string;
  collection?: string;
  items: IndexPageItem[]
};
