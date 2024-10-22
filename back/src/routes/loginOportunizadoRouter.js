const express = require('express');
const router = express.Router();

const { loginOportunizado, getOportunizado } = require("../controllers/loginOportunizadoController");


/**
 * @swagger
 * /oportunizado/login:
 *   post:
 *    summary: login dos usuários oportunizado
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
router.post('/loginOportunizado', loginOportunizado);

/**
 * @swagger
 * /oportunizado/login:
 *   get:
 *    summary: login dos usuários oportunizado
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
router.get('/getOportunizado/:cpf', getOportunizado);

module.exports = router;