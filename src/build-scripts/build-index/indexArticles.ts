// @ts-ignore
import lunr from 'lunr';

type ParsedArticle = {
  text: string;
  path: string;
}

const indexArticles = (articles: ParsedArticle[]) => {
  const index = lunr(function() {
    this.ref('path');
    this.field('text');

    articles.forEach(function(article) {
      this.add(article);
    }, this);
  });

  return index;
};

export default indexArticles;
