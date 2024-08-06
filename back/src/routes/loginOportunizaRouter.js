const express = require('express');
const router = express.Router();

const { loginOportuniza, getOportuniza } = require("../controllers/loginOportunizaController");

router.post('/loginOportuniza', loginOportuniza);
router.get('/getOportuniza', getOportuniza);

module.exports = router;