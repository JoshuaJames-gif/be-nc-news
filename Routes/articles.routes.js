const express = require("express");
const { sendArticleById, patchArticleById } = require("../controllers/articles.controller");

const articlesRouter = express.Router();

articlesRouter
  .route("/:article_id")
  .get(sendArticleById)
  .patch(patchArticleById)

module.exports = articlesRouter;

