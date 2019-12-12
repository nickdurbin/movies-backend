
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stars').del()
    .then(function () {
      // Inserts seed entries
      return knex('stars').insert([
        {name: 'Marlon Brando'},
        {name: 'Al Pacino'},
        {name: 'Robert Duvall'},
        {name: 'Mark Hamill'},
        {name: 'Harrison Ford'},
        {name: 'Carrie Fisher'},
        {name: 'Elijah Wood'},
        {name: 'Ian McKellen'},
        {name: 'Orlando Bloom'},
        {name: 'Arnold Schwarzenegger'},
        {name: 'Edward Furlong'},
        {name: 'Linda Hamilton'},
        {name: 'Jim Carrey'},
        {name: 'Jeff Daniels'},
        {name: 'Lauren Holly'},
        {name: 'Kurt Russell'},
        {name: 'Bill Paxton'},
        {name: 'Sam Elliot'},
      ]);
    });
};
