const { Router } = require('express');
const router = Router();

const { storeEscola, storeEscolas } = require('../controllers/escolasController');

router.post('/store/escola', storeEscolas);

module.exports = router;