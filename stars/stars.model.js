const db = require('../data/dbConfig');

function find() {
    return db('stars');
}

function findBy(filter) {
    return db('stars').where(filter)
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