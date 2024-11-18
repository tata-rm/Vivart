const connection = require('../config/db');
const dotenv = require('dotenv').config();
const router = express.Router();

// Rota para armazenar dados do livro
async function livros (req, res) {
    const { nome, autor, data_lançamento, quant_páginas, area, thumbnail } = req.body;

    // Validando se os campos necessários foram preenchidos
    const params = [
        nome, 
        autor || 'Autor desconhecido',
        data_lançamento || null,
        quant_páginas || 0,
        area || 'desconhecida'
    ];

    const query = "INSERT INTO livros(nome, autor, data_lançamento, quant_páginas, area) VALUES (?, ?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(400).json({
                success: false,
                message: "Erro ao armazenar livro",
                error: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Livro cadastrado com sucesso!",
            data: results
        });
    });
};

module.exports = {
    storeTask
};
