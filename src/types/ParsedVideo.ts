export type ParsedVideo = {
  type: 'video';
  title: string;
  description: string;
  slug: string;
  youtube_id: string;
  url: string;
  path: string;
  collection?: string;
};
