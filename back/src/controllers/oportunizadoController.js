const connection = require('../config/db');
const dotenv = require('dotenv').config();
const path = require('path');
const fs = require('fs');

const uploadPath = path.join(__dirname, '..', 'uploads');

if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function storeOportunizado(request, response) {

    if(request.files) {
        return response.status(400).json({
            success: false,
            message: "Você não enviou o documento"
        });
    }

    const documento = request.files.documento;
    const documentoNome = Date.now() + path.extname(documento.name);
    
    documento.mv(path.join(uploadPath, documentoNome), (erro) => {
        if(erro) {
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo"
            })
        }
    })
    const params = Array(
        request.body.area,
        request.body.nome,
        request.body.data_nasc,
        request.body.cpf,
        request.body.celular,
        request.body.senha,
        request.body.email,
        request.body.texto,
        documentoNome
    );

    const query = "INSERT INTO cadastro_oportunizado(area, nome, data_inicio, cnpj, telefone, senha, email, texto, documento1, documento2, documento3) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
    
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
    });
}


module.exports = {
    storeOportunizado,
}