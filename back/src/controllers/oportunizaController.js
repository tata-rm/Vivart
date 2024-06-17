const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeEscolas(request, response) {
    const params = Array(
        request.body.área,
        request.body.nome,
        request.body.data_inicio,
        request.body.cnpj,
        request.body.telefone,
        request.body.senha,
        request.body.email,
        request.body.texto,
        request.body.documento1,
        request.body.documento2,
        request.body.documento3
    );

    const query = "INSERT INTO escolas(área, nome, data_inicio, cnpj, telefone, senha, email, texto, documento1, documento2, documento3) VALUES(?,?,?,?,?,?,?,?,?,?,?,)";
    
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

/*async function retornaEscolas(req, res){
    console.log(req.params.cidade)
    connection.query(`SELECT nome FROM escolas where cidade like '${req.params.cidade}'`, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }
        res.json(results);
    });
}*/

module.exports = {
    storeOportuniza,
    //retornaEscolas
}