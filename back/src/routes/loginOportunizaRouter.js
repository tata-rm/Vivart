const express = require('express');
const router = express.Router();

const { loginOportuniza } = require("../controllers/loginOportunizaController");

router.post('/loginOportuniza', loginOportuniza);

module.exports = router;