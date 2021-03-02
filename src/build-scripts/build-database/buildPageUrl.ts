import slugify from '@sindresorhus/slugify';

export const buildPageUrl = (articleName: string, articleType: string, urlNamespace: string) => {
  const slugifiedTOCItemName = slugify(articleName);
  return `${urlNamespace}/${articleType}s/${slugifiedTOCItemName}`;
};
