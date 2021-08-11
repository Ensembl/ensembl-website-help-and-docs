import { Request, Response } from 'express';
import { In } from "typeorm";
import pick from 'lodash/pick';

import { Article } from '../models';
import { IndexArticle, TextArticle, VideoArticle } from '../models/Article';

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
      res.json({
        slug: article.slug,
        type: article.type,
        url: article.url,
        title: article.title,
        description: article.description,
        ...await getTypeSpecificArticleFields(article)
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

const getTypeSpecificArticleFields = async (article: TextArticle | VideoArticle | IndexArticle) => {
  switch (article.type) {
    case 'article':
      return {
        body: article.body,
        related_articles: await populateRelatedArticles(article)
      };
    case 'video':
      return {
        youtube_id: article.data.youtube_id,
        related_articles: await populateRelatedArticles(article)
      };
    case 'index':
      return { items: article.data.items };
    default:
      return null;
  }
};

const populateRelatedArticles = async (article: TextArticle | VideoArticle) => {
  const relatedArticleIds = article.data?.relatedArticles || [];
  const relatedArticles = await Article.find({ id: In(relatedArticleIds) });
  const sortedRelatedArticles = relatedArticleIds.map(id => relatedArticles.find(article => article.id === id));
  return sortedRelatedArticles.map(article => pick(article, ['title', 'type', 'url', 'slug']));
};
