const connection = require('../config/db');
const dotenv = require('dotenv').config();


async function storeLivros(request, response) {
    const { id_user, id_book, titulo, thumbnail } = request.body; // Obtenha os dados corretos
    const params = [id_user, id_book, titulo, thumbnail]; // Crie o array com os dados
 
    const query = "INSERT INTO livros(id_user, id_book, titulo, thumbnail) VALUES (?, ?, ?, ?)";
   
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            console.log(err);
            response.status(400).json({
                success: false,
                message: "Ops, deu problema!",
                sql: err
            });
        }
    });
}
 
async function storeTask(request, response){
   
    const params = Array(request.body.idUser, request.body.id, request.body.nome, request.body.thumbnail)
    console.log(request.body)
 
    const query = "INSERT INTO young_favoritos(id_user, id_book, titulo, thumbnail) values(?,?,?,?)";
 
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
            console.log(err)
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    sql: err
                })
        }
    })
}

module.exports = {
    storeLivros
}
 