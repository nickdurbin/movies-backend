
exports.up = function(knex) {
  return knex.schema.createTable('movies_stars', tbl => {
      tbl.integer('movie_id').unsigned().notNullable().references('id').inTable('movies').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.integer('stars_id').unsigned().notNullable().references('id').inTable('stars').onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies_stars');
};
