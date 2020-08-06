const express = require("express");
const { sendArticleById } = require("../controllers/articles.controller");

const articlesRouter = express.Router();

articlesRouter.route("/:article_id").get(sendArticleById);

module.exports = articlesRouter;

