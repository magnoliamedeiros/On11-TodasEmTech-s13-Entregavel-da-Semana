const dotenv = require('dotenv').config()
const mongoose = require('mongoose') // importa o mongoose

// configuração do banco
const con = ()=>{mongoose.connect(process.env.DATABASE_URL, {

    // por padrão, é necessário usar esses parâmetros
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(console.log('Database connected!')).catch(err => console.err )}

module.exports = { 
    con 
}