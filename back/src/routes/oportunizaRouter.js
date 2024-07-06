const { Router } = require('express');
const router = Router();

const { storeOportuniza } = require('../controllers/oportunizaController');

router.post('/oportuniza/create', storeOportuniza)
//router.post('/store/oportuniza', storeOportuniza);

module.exports = router;