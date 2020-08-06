const {fetchArticleById} = require('../models/articles.models')

exports.sendArticleById = (req, res) => {
  const { article_id } = req.params;
  fetchArticleById(article_id).then((article) => {
    res.send({ article });
  });
};