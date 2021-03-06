const store = require('../store')

exports.up = function(knex, Promise) {
    return knex.schema
    .table('user', t => {
        t.string('salt').notNullable()
        t.string('encrypted_password').notNullable()
    })
    .then(() => knex('user'))
    .then(users => Promise.all(users.map(convertPassword)))
    .then(() => {
        return knex.schema.table('user', t => {
            t.dropColumn('password')
        })
    })

    function convertPassword(user) {
        const {salt, hash} = store.saltHashPassword(user.password)
        console.log(`convertPassword() ${salt} ${hash}`)
        return knex('user')
        .where({id: user.id})
        .update({
            salt,
            encrypted_password: hash
        })
    }

};

exports.down = function(knex, Promise) {
    return knex.schema.table('user', t => {
        t.dropColumn('salt')
        t.dropColumn('encrypted_password')
        t.string('password').notNullable()
    })
};
