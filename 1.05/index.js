const http = require('http')
const express = require('express')
const app = express()


app.get('/', (request, response) => {

    response.send('The server is up and running! Enjoy!')
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

