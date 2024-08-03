const connection = require('../config/db');

async function loginOportunizado(request, response) {
    const cpf = Array(request.body.cpf);

    const query = "SELECT cpf, senha, created_at FROM cadastro_oportunizado WHERE cpf = ?";
    console.log("aqui")
    connection.query(query, cpf, (err, results) => {
        if(results.length > 0) {
            console.log("aqui!!!")
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
                    sucess: false,
                    message: "Senha incorreta!",
                    data: err
                })
            }
        } else {
            console.log("aqui!!!2")

            response.status(400).json({
                sucess: false,
                message: "Senha incorreta!",
                data: err
            })
        }
    })
}

module.exports = {
    loginOportunizado
};