const {fetchArticleById, editArticle} = require('../models/articles.models')

exports.sendArticleById = (req, res, next) => {
  const { article_id } = req.params;
  fetchArticleById(article_id).then((article) => {
    res.send({ article });
  }).catch((err) => {
    next(err);
  });
};

exports.patchArticleById = (req, res, next) => {
  const id = req.params.article_id
  editArticle(id)
    .then((newArticle) => {
      res
      .status(200)
      .send(newArticle)
    })
}