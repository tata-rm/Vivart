const { Router } = require('express');
const router = Router();

const { storeEscolas, retornaEscolas } = require('../controllers/escolasController');

/**
 * @swagger
 * /escolas/adicionar:
 *   post:
 *    summary: adicionar escolas na lista
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
router.post('/store/escolas', storeEscolas);

/**
 * @swagger
 * /escolas/retornar:
 *   get:
 *    summary: retornar escolas da lista
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
router.get('/get/escolas/:cidade', retornaEscolas);

module.exports = router;