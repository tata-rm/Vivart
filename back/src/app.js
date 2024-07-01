//configuração e aplicação da webapi
//Importar pacotes:

const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const fs = require('fs');
const fileupload = require('express-feliupload');
const escolasRouter = require('./routes/escolasRouter');
const oportunizaRouter = require('./routes/oportunizaRouter');
const oportunizadoRouter = require('./routes/oportunizadoRouter');

const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use(fileupload());

app.use('/api', escolasRouter);
app.use('/api', oportunizaRouter);
app.use('/api', oportunizadoRouter);

module.exports = app;