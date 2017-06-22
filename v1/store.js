const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))

function randomString() {
    return crypto.randomBytes(4).toString('hex')
}

function saltHashPassword({password, salt = randomString()}) {
    const hash = crypto.createHmac('sha512', salt).update(password)

    return {
        salt,
        hash: hash.digest('hex')
    }
}

module.exports = {
    saltHashPassword,
    
    createUser({username, password}) {
        console.log(`Adding user ${username} with password ${password}`)
        const {salt, hash} = saltHashPassword({password})
        return knex('user').insert({
            username, 
            salt,
            encrypted_password: hash})
    },

    authenticate({username, password}) {
        console.log(`Authenticate user ${username} with password ${password}`)

        return knex('user').where({username})
        .then(([user]) => {
            if (!user) return {success: false}
            const {hash} = saltHashPassword({password, salt: user.salt})
            return {success: hash === user.encrypted_password}
        })
    },

}