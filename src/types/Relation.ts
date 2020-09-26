type RelativePathRelation = {
  relative_path: string;
};

type RootPathRelation = {
  docs_root_path: string;
};

type SlugRelation = {
  slug: string;
};

export type Relation =
  | RelativePathRelation
  | RootPathRelation
  | SlugRelation;
