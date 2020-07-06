import { Request, Response } from 'express';

import { Article } from '../models';

export const getArticle = async (req: Request, res: Response) => {
  const slug = req.query.slug as string | undefined;
  const filePath = req.query.path as string | undefined;
  if (!filePath && !slug) {
    res.status(400);
    return res.json({
      error: 'Path and slug parameters cannot both be empty'
    });
  }

  try {
    const article: Article = filePath
      ? await Article.findOne({ where: { path: filePath } })
      : await Article.findOne({ where: { slug: slug } });

    if (article) {
      const videos = await article.getVideos();
      res.json({
        path: article.path,
        slug: article.slug,
        body: article.body,
        videos
        // data: match.data
      });
    } else {
      res.status(404);
      res.json({
        error: `Article not found`
      });
    }
  } catch (error) {
    res.status(500);
    res.json({
      error: 'There was an error processing your request'
    });
  }
};
