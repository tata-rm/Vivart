const { Router } = require('express');
const router = Router();

const { storeOportuniza } = require('../controllers/oportunizaController');

router.post('/store/oportuniza', storeOportuniza);
//router.get('/get/escolas/:cidade', retornaEscolas);

module.exports = router;