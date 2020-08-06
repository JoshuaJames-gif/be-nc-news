const knex = require("../db/connection");

exports.fetchUserByName = (username) => {
  return knex
  .select()
  .from("users")
  .where('username', '=', username)
  .then((data) => {
    if (data.length === 0) {
      return Promise.reject({ status: 404, msg: 'User does not exist!' })
    } else return data
  })
  
};
