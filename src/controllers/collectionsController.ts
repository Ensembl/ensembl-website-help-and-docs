import { Request, Response } from 'express';

import { Collection } from '../models';

export const getCollection = async (req: Request, res: Response) => {
  const name = req.query.name as string | undefined;

  try {
    const collection: Collection = await Collection.findOne({ where: { name } });

    if (collection) {
      const articles = await collection.getArticles();
      res.json(articles);
    } else {
      res.status(404);
      res.json({
        error: `Article not found`
      });
    }
  } catch (error) {
    console.log('error', error);
    res.status(500);
    res.json({
      error: 'There was an error processing your request'
    });
  }
};
