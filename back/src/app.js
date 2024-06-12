//configuração e aplicação da webapi
//Importar pacotes:

const express = require('express');
const dotenv = require('dotenv').config();
const escolasRouter = require('./routes/escolasRouter');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
//rota do pacote multer
app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', escolasRouter);

module.exports = app;