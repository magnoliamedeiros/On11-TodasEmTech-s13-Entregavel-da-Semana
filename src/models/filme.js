const mongoose = require('mongoose')

// criando o schema para o mongo
const filmeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    available_on: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    }
})

// Nesse monento estamos exportando nossa collection
// 'filme' é como vamos chamar
module.exports = mongoose.model('filme', filmeSchema)