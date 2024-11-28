const connection = require('../config/db');
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const uploadPost = path.join(__dirname, '..', 'post');

if(!fs.existsSync(uploadPost)) {
    fs.mkdirSync(uploadPost);
}

async function storePost(request, response) {
console.log(request.files);

    if(!request.files) {
        return response.status(400).json({
            success: false,
            message: "Os dados solicitados não foram preenchidos"
        });
    }

    const imgPost = request.files.imgPost;
    const imgPostNome = Date.now() + path.extname(imgPost.name);

    console.log(request)

    imgPost.mv(path.join(uploadPost, imgPostNome), (erro) => {

        if(erro) {
            console.log("err?", erro)
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo"
            });
        }

        const params = Array(
            request.body.textPost,
            imgPostNome,
            request.body.nomePost,
            request.body.cpfPost,
            request.body.perfilPost
        );

        console.log(params)

        const query = "INSERT INTO post(texto, img, nome, cpf_cadastro_oportunizado, fotoPerfil) VALUES(?,?,?,?,?)";

        connection.query(query, params, (err, results) => {
            if(results) {
                response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
            } else {
                response.status(400).json({
                    success: false,
                    message: "Sem sucesso!",
                    sql: err
                })
            }
        });
    });
}

/*-----------------------------------------------*/

async function getPost(request, response) {

    let idPost = Array(
        request.params.idPost
    );
    console.log(idPost)

    const query = "SELECT * FROM post WHERE cpf_cadastro_oportunizado = ?";

    connection.query(query, idPost, (err, result) => {
        if(result) {
            console.log(result)
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

/*-----------------------------------------------*/

async function getAllPost(request, response) {

    const query = "SELECT * FROM post";

    connection.query(query, (err, result) => {
        if(result) {
            console.log(result)
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
    storePost,
    getPost,
    getAllPost
};
