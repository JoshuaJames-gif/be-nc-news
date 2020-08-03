exports.up = function (knex) {
  return knex.schema.createTable('topics', (topicsTable) => {

    topicsTable.increments('topic_id').primary()
    topicsTable.string('description')
    topicsTable.string('slug')
   
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('articles')
};
