const connection = require('../config/db');
//const dotenv = require('dotenv').config();
//const path = require('path');
//const fs = require('fs');

async function storeOportuniza(request, response) {
    const params = Array(
        request.body.areaOportuniza,
        request.body.nomeOportuniza,
        request.body.data_inicioOportuniza,
        request.body.cnpjOportuniza,
        request.body.celOportuniza,
        request.body.senhaOportuniza,
        request.body.emailOportuniza,
        request.body.experiênciasOportuniza,
        request.body.docOportuniza
    );

    console.log(request.body)


    const query = "INSERT INTO cadastro_oportuniza(area, nome, data_inicio, cnpj, telefone, senha, email, texto, documento1) VALUES(?,?,?,?,?,?,?,?,?)";
    
    connection.query(query, params, (err, results) => {

        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            console.log(err)
            response.status(400).json({
                success: false,
                message: "Sem sucesso!",
                data: err
            })
        }
    })
}

module.exports = {
    storeOportuniza
}