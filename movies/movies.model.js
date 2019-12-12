const db = require('../data/dbConfig');

function find() {
    return db('movies');
}

function findBy(filter) {
    return db('movies').where(filter)
}

async function addMovie(newMovie) {
    const [id] = await db('movies').insert(newMovie);
    return findBy({id});
}

async function updateMovie(id, movie) {
    await db('movies').where({id}).update(movie);
    return findBy({id});
}

function deleteMovie(id) {
    return db('movies').where({id}).del();
}

module.exports = {find, findBy, addMovie, updateMovie, deleteMovie}