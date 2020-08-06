import { Request, Response } from 'express';
// @ts-ignore
import lunr from 'lunr';

import config from '../../config';
import { Article } from '../models';

const articlesIndexPath = config.articlesIndexPath;
const articlesIndex = require(articlesIndexPath);

export const search = async (req: Request, res: Response) => {
  const query = req.query.query as string | undefined;
  if (!query) {
    res.status(400);
    return res.json({
      error: 'Query parameter cannot be empty'
    });
  }

  const searchResults = searchIndex(query, articlesIndex);

  try {
    const paths: string[] = searchResults.map((result: any) => result.ref);
    const articles = await Promise.all(
      paths.map(path => Article.findOne({ where: { path } }))
    );

    res.json(articles);
  } catch (error) {
    res.status(404);
    res.json({
      error,
      searchResults
    })
  }
};

const searchIndex = (query: string, index: string) => {
  const idx = lunr.Index.load(index);
  return idx.search(query);
};

