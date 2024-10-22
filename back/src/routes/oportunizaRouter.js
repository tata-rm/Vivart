const { Router } = require('express');
const router = Router();

const { storeOportuniza } = require('../controllers/oportunizaController');

/**
 * @swagger
 * /oportuniza/cadastro:
 *   post:
 *    summary: cadastra usuários oportuniza
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
router.post('/oportuniza/create', storeOportuniza);
module.exports = router;