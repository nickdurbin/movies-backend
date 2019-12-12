const db = require('../data/dbConfig');

async function findStarsBy(movie_id) {
    const stars = await db('movies_stars').where({movie_id})
    const starList = stars.map(({stars_id}) => stars_id);
    async function allStars(starsList) {
        let rtnList = [];
        for (let star of starsList) {
            const aStar = await db('stars').where({id: star}).first();
            rtnList = [...rtnList, aStar];
        }
        return rtnList;
    }
    const foundStars = allStars(starList).then(res => {
        return res;
    });
    return foundStars;
}

async function addStarToMovie(starMovie) {
    const [movie_id] = await db('movies_stars').insert(starMovie);
    return findStarsBy(movie_id);
}

function removeStarFromMovie(movie_id, stars_id) {
    return db('movies_stars').where({movie_id, stars_id}).del();
}

module.exports = {findStarsBy, addStarToMovie, removeStarFromMovie}