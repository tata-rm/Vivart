const connection = require('../config/db');


async function loginOportunizado(request, response) {
    const cpf = Array(request.body.cpf);

    const query = "SELECT * FROM cadastro_oportunizado WHERE cpf = ?";

    connection.query(query, cpf, (err, results) => {
        if(results.length > 0) {
            const senha = request.body.senha;
            const senhaQuery = results[0].senha;
            if (senha === senhaQuery) {
                response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results[0]
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

async function getOportunizado(request, response) {

    let cpf = Array(
        request.params.cpf
    );

    const query = "SELECT * FROM cadastro_oportunizado WHERE cpf = ?";

    connection.query(query, cpf, (err, result) => {
        if(result) {
            console.log(result)
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: result[0]
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
    loginOportunizado,
    getOportunizado
};