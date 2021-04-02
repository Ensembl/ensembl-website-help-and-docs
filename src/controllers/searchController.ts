import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export const search = async (req: Request, res: Response) => {
  const query = req.query.query as string | undefined;
  if (!query) {
    res.status(400);
    return res.json({
      error: 'Query parameter cannot be empty'
    });
  }

  try {
    const searchResults = await searchForArticles(query);
    res.json(searchResults);
  } catch (error) {
    res.status(404);
    res.json({
      error
    })
  }
};

const sql = `
  SELECT title, url, body
  FROM article
  WHERE id IN (
    SELECT article_id
    FROM articles_to_searchable_articles
    WHERE searchable_article_id IN (
      SELECT rowid
      FROM searchable_articles
      WHERE searchable_articles MATCH $1
      ORDER BY rank
    )
  )
`;


const searchForArticles = async (query: string) => {
  const entityManager = getManager();
  return await entityManager.query(sql, [query]);
};
