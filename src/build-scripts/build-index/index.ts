import { getManager } from 'typeorm';

const buildIndex = async () => {
  const entityManager = getManager();
  await entityManager.query('CREATE VIRTUAL TABLE searchable_articles USING FTS5(title, body)');
  await entityManager.query('CREATE TABLE articles_to_searchable_articles (article_id INT NOT NULL, searchable_article_id INT NOT NULL)');
  const allArticles = await entityManager.query('SELECT id, title, body, url FROM article');
  
  for (const article of allArticles) {
    if (article.url && article.body) {
      const searchableArticleId = await entityManager.query(
        'INSERT INTO searchable_articles(title, body) VALUES($1, $2)',
        [article.title, article.body]
      );
      await entityManager.query(
        'INSERT INTO articles_to_searchable_articles(article_id, searchable_article_id) VALUES($1, $2)',
        [article.id, searchableArticleId]
      );
    }
  }
};

export default buildIndex;
