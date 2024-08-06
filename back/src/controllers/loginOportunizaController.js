const connection = require('../config/db');

async function loginOportuniza(request, response) {
    const cnpj = Array(request.body.cnpj);

    const query = "SELECT cnpj, senha, created_at FROM cadastro_oportuniza WHERE cnpj = ?";

    connection.query(query, cnpj, (err, results) => {
        if(results.length > 0) {
            const senha = request.body.senha;
            const senhaQuery = results[0].senha;
            if (senha === senhaQuery) {
                response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
            } else {
                response.status(400).json({
                    success: false,
                    message: "Senha incorreta!",
                    data: err
                })
            }
        } else {
            response.status(400).json({
                success: false,
                message: "Senha incorreta!",
                data: err
            })
        }
    })
}

async function getOportuniza(request, response) {
    const query = "SELECT * FROM cadastro_oportuniza";

    connection.query(query, (err, result) => {
        if(result) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: result
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Senha incorreta!",
                data: err
            })
        }
    })
}

module.exports = {
    loginOportuniza,
    getOportuniza
};