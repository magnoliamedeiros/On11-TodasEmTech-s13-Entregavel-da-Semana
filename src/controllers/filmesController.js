const Filme = require('../models/filme')

const cadastrarFilme = async (req, res)=>{

    // criar um filme
    const filme = new Filme({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        available_on: req.body.available_on,
        created_at: req.body.created_at
    })

    // salvar filme no mongo
    try {
        const novoFilme = await filme.save()
        res.status(201).json([{
            mensagem: "Filme adicionado com sucesso!",
            novoFilme
        }])
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const listarTodosFilmes = async (req, res)=>{
    try {
        const filmes = await Filme.find()
        res.status(200).send(filmes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const listarFilmePorId = async (req, res)=>{
    try {
        
        const filme = await Filme.findById(req.params.id)

        if (filme == null) {
            res.status(404).send({mensagem: 'Filme não encontrado!'})
        }

        res.status(200).send(filme)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const atualizarFilme = async (req, res)=>{
    try {
        const filme = await Filme.findById(req.params.id)

        if (filme == null) {
            res.status(404).json({mensagem: 'Filme não encontrado!'})
        }

        if (req.body.title != null) {
            filme.title = req.body.title
        }

        if (req.body.description != null) {
            filme.description = req.body.description
        }

        if (req.body.type != null) {
            filme.type = req.body.type
        }

        if (req.body.available_on != null) {
            filme.available_on = req.body.available_on
        }

        if (req.body.created_at != null) {
            filme.created_at = req.body.created_at
        }

        const filmeAtualizado = await filme.save()

        res.status(201).json([{
            mensagem: "Filme atualizado com sucesso!",
            filmeAtualizado
        }])
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const excluirFilme = async (req, res)=>{
    try {
        
        const filme = await Filme.findById(req.params.id)
        
        if (filme == null ) {
            res.status(404).send({mensagem: 'Filme não encontrado!'})
        }

        await filme.remove()

        res.status(200).send({mensagem: 'Filme excluído com sucesso!'})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    cadastrarFilme,
    listarTodosFilmes,
    listarFilmePorId,
    atualizarFilme,
    excluirFilme
}