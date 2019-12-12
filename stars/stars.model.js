const db = require('../data/dbConfig');

async function find() {
    const stars = await db('stars');
    const movies = await db('movies');
    const mapping = await db('movies_stars');
    const rtnList = stars.map(star => {
        const movieList = mapping.filter(({stars_id}) => stars_id === star.id).map(({movie_id})=> movie_id);
        const rtnMovie = movieList.map(movie => movies.filter(({id})=> id === movie)[0]);
        return {
            ...star,
            movies: rtnMovie
        }
    })
    return rtnList;
}

async function findBy(filter) {
    const star = db('stars').where(filter)
    const movies = await db('movies');
    const mapping = await db('movies_stars');
    const rtnList = star.map(star => {
        const movieList = mapping.filter(({stars_id}) => stars_id === star.id).map(({movie_id})=> movie_id);
        const rtnMovie = movieList.map(movie => movies.filter(({id})=> id === movie)[0]);
        return {
            ...star,
            movies: rtnMovie
        }
    })
    return rtnList;
}

async function addStar(newStar) {
    const [id] = await db('stars').insert(newStar);
    return findBy({id});
}

async function updateStar(id, Star) {
    await db('stars').where({id}).update(Star);
    return findBy({id});
}

function deleteStar(id) {
    return db('stars').where({id}).del();
}

module.exports = {find, findBy, addStar, updateStar, deleteStar}