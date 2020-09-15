const Koa = require('koa');
const startDb = require('./db');
const port = process.env.PORT || 3000;
const router = require('./middleware/router');

// inicializa o banco de dados
startDb();

// cria a instancia do app
const app = new Koa();

// rotas
app.use(router.routes());

// iniciando o servidor
app.listen(port, () => console.log(`Servidor executado em http://localhost:${port}`));