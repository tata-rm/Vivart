const express = require('express');
const router = express.Router();
const { atualizarImgPerfil } = require('../controllers/perfilController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Define o destino dos arquivos

router.post('/atualizarImgPerfil', upload.single('fotoPerfil'), atualizarImgPerfil);

module.exports = router;