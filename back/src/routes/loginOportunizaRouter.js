const express = require('express');
const router = express.Router();

const { loginOportuniza, getOportuniza } = require("../controllers/loginOportunizaController");


/**
 * @swagger
 * /oportuniza/login:
 *   post:
 *    summary: login dos usuários oportuniza
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
router.post('/loginOportuniza', loginOportuniza);

/**
 * @swagger
 * /oportuniza/login:
 *   get:
 *    summary: login dos usuários oportuniza
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
router.get('/getOportuniza', getOportuniza);

module.exports = router;