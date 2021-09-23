const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('apple'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../apple/index.html'))
})

const port = process.env.PORT || 4445
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})