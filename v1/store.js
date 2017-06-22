module.exports = {
    createUser({username, password}) {
        console.log(`Adding user ${username} with password ${password}`)
        return Promise.resolve()
    }
}