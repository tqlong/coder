const knex = require('knex')(require('./knexfile'))

module.exports = {
    createUser({username, password}) {
        console.log(`Adding user ${username} with password ${password}`)
        return knex('user').insert({username, password})
    }
}