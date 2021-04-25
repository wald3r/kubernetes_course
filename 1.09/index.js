const http = require('http')
const express = require('express')
const app = express()

var pong = 0

app.get('/pingpong', (request, response) => {

    response.send(`pong ${pong}`)
    pong = pong + 1
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})
