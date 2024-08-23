//configuração e aplicação da webapi
//Importar pacotes:

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const fileupload = require('express-fileupload');

const escolasRouter = require('./routes/escolasRouter');
const oportunizaRouter = require('./routes/oportunizaRouter');
const oportunizadoRouter = require('./routes/oportunizadoRouter');
const loginOportunizaRouter = require('./routes/loginOportunizaRouter');
const loginOportunizadoRouter = require('./routes/loginOportunizadoRouter');
const imgPerfilRouter = require('./routes/imgPerfilRouter');

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use(fileupload());

//habilitar utilização na aplicação:
app.use('/images', express.static(__dirname + '\\imagens_perfil'));
app.use('/api', escolasRouter);
app.use('/api', oportunizaRouter);
app.use('/api', oportunizadoRouter);
app.use('/api', loginOportunizaRouter);
app.use('/api', loginOportunizadoRouter);
app.use('/api', imgPerfilRouter);

module.exports = app;