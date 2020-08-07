const express = require("express");
const apiRouter = require("./Routes/api.routes");
const {
  handleCustomError,
  handleServerErrors,
  handlePSQLError,
} = require("./errors");


const app = express();
app.use(express.json());

app.use("/api", apiRouter);

app.use(handleCustomError);
app.use(handleServerErrors);
app.use(handlePSQLError);

module.exports = app;
