const { Router } = require('express');
const router = Router();

const { storeEscolas, retornaEscolas } = require('../controllers/escolasController');

router.post('/store/escolas', storeEscolas);
router.get('/get/escolas/:cidade', retornaEscolas);

module.exports = router;