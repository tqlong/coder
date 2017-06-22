const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 7555

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})