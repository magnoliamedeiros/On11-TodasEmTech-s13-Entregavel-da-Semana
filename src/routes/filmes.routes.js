const express = require('express')
const router = express.Router()
const controller = require('../controllers/filmesController')

router.get('/', controller.listarTodosFilmes)
router.get('/:id', controller.listarFilmePorId)

router.post('/cadastrar', controller.cadastrarFilme)

router.patch('/atualizar/:id', controller.atualizarFilme)

router.delete('/:id', controller.excluirFilme)

module.exports = router