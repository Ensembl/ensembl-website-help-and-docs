import { Request, Response } from 'express';

import { TextArticle, VideoArticle } from '../models';

export const getArticle = async (req: Request, res: Response) => {
  const slug = req.query.slug as string | undefined;
  const url = req.query.url as string | undefined;
  if (!url && !slug) {
    res.status(400);
    return res.json({
      error: 'Url and slug parameters cannot both be empty'
    });
  }

  try {
    const searchKey = slug ? 'slug' : 'url';
    const searchValue = slug ? slug : url as string;

    // should be TextArticle | VideoArticle | null
    const article: TextArticle | VideoArticle | null = await TextArticle.findOne({
      where: { [searchKey]: searchValue },
      relations: ['relatedArticles']
    });

    if (article) {
      const relatedArticles = await article.relatedArticles;
      console.log('relatedArticles', relatedArticles);
      res.json({
        slug: article.slug,
        url: article.url,
        title: article.title,
        body: article.body,
        // related_articles: article.relatedArticles,
        // videos: article.videos
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
