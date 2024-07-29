const connection = require('../config/db');
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const uploadPath = path.join(__dirname, '..', 'uploads');

if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function storeOportunizado(request, response) {

    if(!request.files) {
        console.log("sem arq")
        return response.status(400).json({
            success: false,
            message: "Você não enviou o arquivo de documento."
        });
    }

    const documento = request.files.docOportunizado;
    const documentoNome = Date.now() + path.extname(documento.name);

    documento.mv(path.join(uploadPath, documentoNome), (erro) => {
        
        if(erro) {
            console.log("err?", erro)
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo"
            });
        }

        const params = Array(
            request.body.nomeOportunizado,
            request.body.data_nascOportunizado,
            request.body.cpfOportunizado,
            request.body.celOportunizado,
            request.body.senhaOportunizado,
            request.body.emailOportunizado,
            request.body.experienciasOportunizado,
            request.body.areaOportunizado,
            documentoNome
        );

        console.log(params)
        
        const query = "INSERT INTO cadastro_oportunizado(nome, data_nasc, cpf, celular, senha, email, texto, area, documento1) VALUES(?,?,?,?,?,?,?,?,?)";

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


module.exports = {
    storeOportunizado
}