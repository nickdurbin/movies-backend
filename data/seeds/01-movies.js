
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'The Godfather',
          director: 'Francis Ford Coppola',
          metascore: 100
        },
        {
          title: 'Star Wars',
          director: 'George Lucas',
          metascore: 92
        },
        {
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          director: 'Peter Jackson',
          metascore: 92
        },
        {
          title: 'Terminator 2: Judgement Day',
          director: 'James Cameron',
          metascore: 94
        },
        {
          title: 'Dumb and Dumber',
          director: 'The Farely Brothers',
          metascore: 76
        },
        {
          title: 'Tombstone',
          director: 'George P. Cosmatos',
          metascore: 89
        },
      ]);
    });
};
