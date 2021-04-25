const http = require('http')
const express = require('express')
const app = express()

//const sleep = async (ms)  => await new Promise(resolve => setTimeout(resolve, ms))

var list = []

app.get('/', (request, response) => {
 	let r = Math.random().toString(36).substring(7)
 	let result = `${Date.now()}   ${r}`
 	list = list.concat(result)
    	response.send(list)
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})



