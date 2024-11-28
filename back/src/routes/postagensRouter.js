const { Router } = require('express');
const router = Router();

const { storePost } = require('../controllers/postagensController');
const { getPost } = require('../controllers/postagensController');
const { getAllPost } = require('../controllers/postagensController');



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
router.post('/store/post', storePost);

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
*
*/
router.get('/get/post/:idPost', getPost);

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
*
*/
router.get('/get/getAllPost', getAllPost);

module.exports = router;
