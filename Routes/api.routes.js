const apiRouter = require('express').Router()
const topicsRouter = require('./topics.routes')
const UsersRouter = require('./users.routes')
const articlesRouter = require('./articles.routes')


apiRouter.use('/topics', topicsRouter);
apiRouter.use('/users', UsersRouter);
apiRouter.use('/articles', articlesRouter);


module.exports = apiRouter;