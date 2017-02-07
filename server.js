const express = require('express')
const server = express()
const PORT = 8090

server.use(express.static('' + __dirname))

function callback(request, response) {
  response.redirect('../index.html')
}

server.get('/', callback)

server.listen(PORT)
