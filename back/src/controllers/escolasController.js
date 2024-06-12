// const connection = require('mysql2/typings/mysql/lib/Connection');
const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeEscolas(request, response) {
    const params = Array(
        request.body.title,
        request.body.description
    );

    const query = "INSERT INTO escolas(nome, cidade) VALUES(?,?)";
    
    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Ops, deu problema!",
                    sql: err
                })
        }
    })
}

module.exports = {
    storeEscolas
}