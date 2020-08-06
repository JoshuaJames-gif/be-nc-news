exports.handleCustomError = (err, req, res, next) => {
  if ('status' in err) {
    res.status(err.status).send({
      msg: err.msg
    })
  } else next(err)
}

exports.handlePSQLError = (err, req, res, next) => {
  if (err.code = "42703") {
    res.status(400).send()
  } else next(err)
}

exports.handleServerErrors = (err, req, res, next) => {
  console.log(err)
  res.status(500).send()
}