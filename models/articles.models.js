const knex = require("../db/connection");

exports.fetchArticleById = (article_id) => {
  return (
    knex
      .select("articles.*")
      .from("articles")
      .leftJoin("comments", "articles.article_id", "comments.article_id")
      .count({ comment_count: "comment_id" })
      .groupBy("articles.article_id")
      .where("articles.article_id", "=", article_id)
      .then((articles) => {
        if (articles.length === 0) {
          return Promise.reject({
            status: 400,
            msg: 'Invalid request'
          });
        } else return articles[0];
      })
  );
};

exports.editArticle = (id) => {
  return knex('articles')
    .where({
      article_id: id
    })
    .update({
      votes: 100
    }, ['*'])
    .then((data) => {
      console.group(data)
      // if (data.length === 0) {
      //   return Promise.reject({
      //     status: 404,
      //     msg: 'No such treasure!',
      //   });
      // } else return data[0]
    })
}