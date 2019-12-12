
exports.up = function(knex) {
  return knex.schema.createTable('stars', tbl => {
     tbl.increments();
     tbl.string('name', 128).notNullable().unique();
     tbl.timestamps(true, true) 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stars');
};
