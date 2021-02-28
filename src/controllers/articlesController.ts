import { Request, Response } from 'express';
import { In } from "typeorm";
import pick from 'lodash/pick';

import { Article } from '../models';

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

    const article: Article | null = await Article.findOne({
      where: { [searchKey]: searchValue }
    });

    if (article) {
      const relatedArticleIds = (article.data as { relatedArticles?: number[] } | null )?.relatedArticles || [];
      const relatedArticles = await Article.find({ id: In(relatedArticleIds) });
      res.json({
        slug: article.slug,
        type: article.type,
        url: article.url,
        title: article.title,
        body: article.body,
        related_articles: relatedArticles.map(article => pick(article, ['title', 'type', 'url', 'slug']))
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
