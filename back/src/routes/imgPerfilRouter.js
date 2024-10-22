const { Router } = require('express');
const router = Router();

const { atualizarImgPerfil } = require('../controllers/imgPerfilController');

/**
 * @swagger
 * /imgPerfil/atualizar:
 *   post:
 *    summary: atualizar imagem de perfil
 *    responses:
 *      200:
 *        descrption: Sucesso!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/atualizarImgPerfil', atualizarImgPerfil);

module.exports = router;