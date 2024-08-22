const express = require('express');
const router = express.Router();

const { loginOportunizado, getOportunizado } = require("../controllers/loginOportunizadoController");

router.post('/loginOportunizado', loginOportunizado);
router.get('/getOportunizado/:cpf', getOportunizado);

module.exports = router;