exports.handleCustomError = (err, req, res, next) => {
  if ("status" in err) {
    res.status(err.status).send({
      msg: err.msg,
    });
  } else next(err);
};
exports.handlePSQLError = (err, req, res, next) => {
  const psqlCodes = ["22P02", "42703"];
  if (psqlCodes.includes(err.code)) {
    res.status(400).send({ msg: err.message });
  } else next(err);
};

exports.handleServerErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send();
};
