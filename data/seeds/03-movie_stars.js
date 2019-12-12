
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies_stars').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies_stars').insert([
        {movie_id: 1, stars_id: 1},
        {movie_id: 1, stars_id: 2},
        {movie_id: 1, stars_id: 3},
        {movie_id: 2, stars_id: 4},
        {movie_id: 2, stars_id: 5},
        {movie_id: 2, stars_id: 6},
        {movie_id: 3, stars_id: 7},
        {movie_id: 3, stars_id: 8},
        {movie_id: 3, stars_id: 9},
        {movie_id: 4, stars_id: 10},
        {movie_id: 4, stars_id: 11},
        {movie_id: 4, stars_id: 12},
        {movie_id: 5, stars_id: 13},
        {movie_id: 5, stars_id: 14},
        {movie_id: 5, stars_id: 15},
        {movie_id: 6, stars_id: 16},
        {movie_id: 6, stars_id: 17},
        {movie_id: 6, stars_id: 18},
      ]);
    });
};
