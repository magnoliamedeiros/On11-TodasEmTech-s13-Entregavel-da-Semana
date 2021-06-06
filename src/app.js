const express = require("express")
const cors = require('cors')
const app = express()
const filmes = require('./routes/filmes.routes')

app.use(cors())
app.use(express.json())

app.use('/filmes', filmes)

module.exports = app