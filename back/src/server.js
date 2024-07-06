// Inicialização do servidor web onde a webapi estará hospedada

//Importar arquivo app
const app = require('./app');
//Importar porta do servidor
const port = app.get('port');

//testar API
//app.listen(port, () => console.log(`Run on port ${port}!`));
app.listen(port, () => console.log("Run on port" + port));


