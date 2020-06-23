type RelativePathRelation = {
  relativePath: string;
};

type RootPathRelation = {
  docsRootPath: string;
};

type SlugRelation = {
  slug: string;
};

export type Relation =
  | RelativePathRelation
  | RootPathRelation
  | SlugRelation;
