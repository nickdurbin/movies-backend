const db = require('../data/dbConfig');

async function find() {
    const movies = await db('movies');
    const stars = await db('stars');
    const mapping = await db('movies_stars');
    const rtnList = movies.map(movie => {
        const starList = mapping.filter(({movie_id}) => movie_id === movie.id).map(({stars_id})=> stars_id);
        const rtnStar = starList.map(star => stars.filter(({id})=> id === star)[0]);
        return {
            ...movie,
            stars: rtnStar
        }
    })
    return rtnList;
}

async function findBy(filter) {
    const movie = await db('movies').where(filter);
    const stars = await db('stars');
    const mapping = await db('movies_stars');
    const rtnList = movie.map(indMovie => {
        const starList = mapping.filter(({movie_id}) => movie_id === indMovie.id).map(({stars_id})=> stars_id);
        const rtnStar = starList.map(star => stars.filter(({id})=> id === star)[0]);
        return {
            ...indMovie,
            stars: rtnStar
        }
    })
    return rtnList;
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