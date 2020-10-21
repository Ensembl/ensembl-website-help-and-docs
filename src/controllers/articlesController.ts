import { Request, Response } from 'express';

import { Article, Video } from '../models';

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
    const searchKey = slug ? 'slug' : 'path';
    const searchValue = slug ? slug : filePath as string;

    const article: Article | null = await Article.findOne({
      where: { [searchKey]: searchValue },
      include: [
        {
          model: Video,
          as: 'videos',
          attributes: [ 'id', 'title', 'description', 'youtube_id' ]
        },
        {
          model: Article,
          as: 'relatedArticles',
          attributes: [ 'id', 'title', 'slug', 'path' ],
          through: { attributes: [] }
        }
      ]
    });

    if (article) {
      res.json({
        path: article.path,
        slug: article.slug,
        title: article.title,
        body: article.body,
        related_articles: article.relatedArticles,
        videos: article.videos
        // data: match.data
      });
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
