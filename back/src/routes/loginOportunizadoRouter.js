const express = require('express');
const router = express.Router();

const { loginOportunizado } = require("../controllers/loginOportunizadoController");

router.post('/loginOportunizado', loginOportunizado);

module.exports = router;