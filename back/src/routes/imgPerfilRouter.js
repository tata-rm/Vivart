const { Router } = require('express');
const router = Router();

const { atualizarImgPerfil } = require('../controllers/imgPerfilController');

router.post('/atualizarImgPerfil', atualizarImgPerfil);

module.exports = router;