const { fetchUserByName } = require("../models/users.models");

exports.sendUserByName = (req, res, next) => {
  const { username } = req.params
  fetchUserByName(username).then((user) => {
    res.send({ user });
  }).catch((err) => {
    next(err)
  })
}
