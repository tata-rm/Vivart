const { Router } = require('express');
const router = Router();

const { storePost, retornaPosts } = require('../controllers/postController');

/**
 * @swagger
 * /posts/adicionar:
 *   post:
 *    summary: Adicionar uma nova postagem
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
router.post('/store/posts', storePost);

/**
 * @swagger
 * /posts/retornar:
 *   get:
 *    summary: Retornar todas as postagens
 *    responses:
 *      200:
 *        description: Sucesso!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.get('/get/posts', retornaPosts);

module.exports = router;
