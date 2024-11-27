const path = require('path');
const fs = require('fs');
const connection = require('../config/db')

const uploadPath = path.join(__dirname, '..', 'imagens_perfil');

if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function atualizarImgPerfil(request, response) {
    console.log(request.files)
    const cpf = request.body.cpfUser; 
    const fotoPerfil = request.files;

    if (!fotoPerfil) {
        return response.status(400).json({
            success: false,
            message: 'Nenhuma foto foi enviada.'
        });
    }

    const foto = request.files.fotoPerfil;
    console.log(foto)
    console.log(foto.name)
    const fotoNome = Date.now() + path.extname(foto.name);


    foto.mv(path.join(uploadPath,fotoNome), (erro) => {
        
        if(erro) {
            console.log("err?", erro)
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo"
            });
        }

        const params = Array(
            fotoNome,
            cpf
        );
        
        const query = "UPDATE cadastro_oportunizado SET fotoPerfil = ? WHERE cpf = ?"
        
        connection.query(query, params, (err, results) => {
            console.log(err)
            if (results) {
                response.status(200).json({
                    success: true,
                    message: 'Sucesso',
                    data: results
                })
            } else {
                response.status(400).json({
                    success: false,
                    message: "Sem sucesso!",
                    data: err
                })
            }
        });
    });
}

async function atualizarImgPerfilOportuniza(request, response) {
    console.log(request.files)
    const cnpj = request.body.cnpjUser; 
    const fotoPerfil = request.files;

    if (!fotoPerfil) {
        return response.status(400).json({
            success: false,
            message: 'Nenhuma foto foi enviada.'
        });
    }

    const foto = request.files.fotoPerfil;
    console.log(foto)
    console.log(foto.name)
    const fotoNome = Date.now() + path.extname(foto.name);


    foto.mv(path.join(uploadPath,fotoNome), (erro) => {
        
        if(erro) {
            console.log("err?", erro)
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo"
            });
        }

        const params = Array(
            fotoNome,
            cpf
        );
        
        const query = "UPDATE cadastro_oportuniza SET fotoPerfil = ? WHERE cnpj = ?"
        
        connection.query(query, params, (err, results) => {
            console.log(err)
            if (results) {
                response.status(200).json({
                    success: true,
                    message: 'Sucesso',
                    data: results
                })
            } else {
                response.status(400).json({
                    success: false,
                    message: "Sem sucesso!",
                    data: err
                })
            }
        });
    });
}

module.exports = { 
    atualizarImgPerfil,
    atualizarImgPerfilOportuniza
}