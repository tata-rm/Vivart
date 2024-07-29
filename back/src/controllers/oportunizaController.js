const connection = require('../config/db');
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const uploadPath = path.join(__dirname, '..', 'uploads');

if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function storeOportuniza(request, response) {

    if(!request.files) {
        console.log("sem arq")
        return response.status(400).json({
            success: false,
            message: "Você não enviou o arquivo de documento."
        });
    }

    const documento = request.files.docOportuniza;
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
            request.body.areaOportuniza,
            request.body.nomeOportuniza,
            request.body.data_inicioOportuniza,
            request.body.cnpjOportuniza,
            request.body.celOportuniza,
            request.body.senhaOportuniza,
            request.body.emailOportuniza,
            request.body.experienciasOportuniza,
            documentoNome
        );

        console.log(params)

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
        });
    });
}

module.exports = {
    storeOportuniza
}