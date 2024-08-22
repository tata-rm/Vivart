const path = require('path');
const fs = require('fs');

async function atualizarImgPerfil(req, res) {
    const cpf = req.body.cpf; // Assumindo que o CPF ou ID está sendo enviado
    const fotoPerfil = req.file;

    if (!fotoPerfil) {
        return res.status(400).json({
            success: false,
            message: 'Nenhuma foto foi enviada.'
        });
    }

    const fotoPath = path.join(__dirname, '..', 'uploads', fotoPerfil.filename);

    // Aqui você pode atualizar o caminho da imagem no banco de dados
    const query = 'UPDATE cadastro_oportunizado SET foto_perfil = ? WHERE cpf = ?';
    
    connection.query(query, [fotoPath, cpf], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Erro ao atualizar a foto no banco de dados.',
                sql: err
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Foto de perfil atualizada com sucesso.'
        });
    });
}

module.exports = { atualizarImgPerfil };