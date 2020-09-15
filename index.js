const Koa = require('koa');
const startDb = require('./db');
const port = process.env.PORT || 3000;
const router = require('./middleware/router');
const views = require('koa-views');

// inicializa o banco de dados
startDb();

// cria a instancia do app
const app = new Koa();

// registrado antes de router para que ctx.render esteja disponível
// para as definições da rota
app.use(views(`${__dirname}/views`, {
  extension: 'ejs'
}));

// rotas
app.use(router.routes());

// iniciando o servidor
app.listen(port, () => console.log(`Servidor executado em http://localhost:${port}`));