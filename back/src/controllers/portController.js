const connection = require('../config/db');
const dotenv = require('dotenv').config();

/**
 * Função para retornar todas as postagens
 */
async function retornaPosts(req, res) {
    connection.query('SELECT * FROM posts', (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Sucesso!",
            data: results
        });
    });
}

/**
 * Função para adicionar uma nova postagem
 */
async function storePost(req, res) {
    const { titulo, conteudo } = req.body;
    
    // Verifica se os dados necessários foram fornecidos
    if (!titulo || !conteudo) {
        return res.status(400).json({
            success: false,
            message: "Campos 'titulo' e 'conteudo' são obrigatórios!"
        });
    }

    const params = [titulo, conteudo];
    const query = 'INSERT INTO posts(titulo, conteudo) VALUES (?, ?)';

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor",
                sql: err
            });
        }

        res.status(200).json({
            success: true,
            message: "Postagem adicionada com sucesso!",
            data: {
                id: results.insertId,
                titulo,
                conteudo
            }
        });
    });
}

module.exports = {
    storePost,
    retornaPosts
};
