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
        return articles[0];
      })
  );
};
