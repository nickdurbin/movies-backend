const db = require('../data/dbConfig');

function findStarsBy(movie_id) {
    return db('movies_stars').where({movie_id})
}

async function addStarToMovie(starMovie) {
    const [movie_id] = await db('movies_stars').insert(starMovie);
    return findStarsBy(movie_id);
}

function removeStarFromMovie(movie_id, stars_id) {
    return db('movies_stars').where({movie_id, stars_id}).del();
}

module.exports = {findStarsBy, addStarToMovie, removeStarFromMovie}