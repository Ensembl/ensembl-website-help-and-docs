import { Request, Response } from 'express';
import { In } from "typeorm";
import pick from 'lodash/pick';

import { Article } from '../models';
import { TextArticle, VideoArticle } from '../models/Article';

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

    const article = await Article.findOne({
      where: { [searchKey]: searchValue }
    }) as TextArticle | VideoArticle | null;

    if (article) {
      const relatedArticleIds = article.data?.relatedArticles || [];
      const relatedArticles = await Article.find({ id: In(relatedArticleIds) });
      res.json({
        slug: article.slug,
        type: article.type,
        url: article.url,
        title: article.title,
        related_articles: relatedArticles.map(article => pick(article, ['title', 'type', 'url', 'slug'])),
        ...getTypeSpecificArticleFields(article)
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

const getTypeSpecificArticleFields = (article: TextArticle |VideoArticle) => {
  switch (article.type) {
    case 'article':
      return { body: article.body };
    case 'video':
      return { youtube_id: article.data.youtube_id };
    default:
      return null;
  }
}
