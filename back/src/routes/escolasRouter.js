const { Router } = require('express');
const router = Router();

const { storeEscola } = require('../controllers/escolasController');

router.post('/store/escola', storeEscola);

module.exports = router;