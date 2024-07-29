const { Router } = require('express');
const router = Router();

const { storeOportuniza } = require('../controllers/oportunizaController');

router.post('/oportuniza/create', storeOportuniza)

module.exports = router;