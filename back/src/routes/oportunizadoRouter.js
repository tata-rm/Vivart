const { Router } = require('express');
const router = Router();

const { storeOportunizado } = require('../controllers/oportunizadoController');

/**
 * @swagger
 * /oportunizado/cadastro:
 *   post:
 *    summary: cadastra usuários oportunizado
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
router.post('/oportunizado/create', storeOportunizado);

module.exports = router;