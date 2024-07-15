const { Router } = require('express');
const router = Router();

const { storeOportunizado } = require('../controllers/oportunizadoController');

router.post('/oportunizado/create', storeOportunizado);

module.exports = router;