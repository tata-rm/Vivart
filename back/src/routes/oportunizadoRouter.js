const { Router } = require('express');
const router = Router();

const { storeOportunizado } = require('../controllers/oportunizadoController');

router.post('/oportunizado/create');
//router.post('/store/oportunizado', storeOportunizado);
//router.get('/get/escolas/:cidade', retornaEscolas);

module.exports = router;