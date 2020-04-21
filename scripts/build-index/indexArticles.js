const lunr = require('lunr');

const indexArticles = (articles) => {
  const index = lunr(function() {
    this.ref('slug');
    this.field('text');

    articles.forEach(function(article) {
      this.add(article);
    }, this);
  });

  return index;
};

module.exports = indexArticles;
