const connection = require('../config/db');
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const uploadPath = path.join(__dirname, '..', 'post');

if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

//Função para adicionar uma nova postagem
async function storePost(request, response) {    

    if (!request.files) {
        return res.status(400).json({
            success: false,
            message: "Os dados solicitados não foram preenchidos"
        });
    }

    const imgPost = request.files.imgPost;
    const imgPostNome = Date.now() + path.extname(imgPost.name);

    imgPost.mv(path.join(uploadPath, imgPostNome), (erro) => {

    const params = Array(
        request.body.textPost,
        imgPostNome
    );

    const query = "INSERT INTO post(img, texto) VALUES(?,?)";

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
                    message: "Sem sucesso!",
                    sql: err
                })
            }
        });
    });
}
        
//Função para retornar todas as postagens:
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


module.exports = {
    storePost,
    retornaPosts
};
