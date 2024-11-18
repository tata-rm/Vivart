const { Router } = require('express');
const router = Router();

const { livros } = require('../controllers/leiturasController');

/**
 * @swagger
 * /store/livros:
 *  post:
 *    summary: Requere as informações sobre os livros da api
 *    responses:
 *      201:
 *        description: Array com informações dos livros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/store/book', storeTask);

module.exports = router;