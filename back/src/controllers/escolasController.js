const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function retornaEscolas(req, res){
        console.log(req.params.cidade)
        connection.query(`SELECT nome FROM escolas where cidade like '${req.params.cidade}'`, (err, results) => {
            if (err) {
                console.error('Erro ao executar a consulta:', err);
                res.status(500).json({ error: 'Erro interno do servidor' });
                return;
            }
            res.json(results);
        });
}

async function storeEscolas(request, response) {
    const params = Array(
        request.body.nome,
        request.body.cidade
    );

    const query = "INSERT INTO escolas(cidade) VALUES(?)";
    
    connection.query(query, params, (err, results) => {
        if(results) {
            response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response.status(400).json({
                    sucess: false,
                    message: "Ops, deu problema!",
                    sql: err
                })
        }
    })
}

module.exports = {
    storeEscolas,
    retornaEscolas
}