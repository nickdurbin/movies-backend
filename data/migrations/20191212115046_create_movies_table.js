
exports.up = function(knex) {
  return knex.schema.createTable('movies', tbl => {
      tbl.increments();
      tbl.string('title', 128).notNullable().unique();
      tbl.string('director', 128).notNullable();
      tbl.integer('metascore').notNullable();
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');  
};
