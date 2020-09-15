const Koa = require('koa');
const startDb = require('./db');
const port = process.env.PORT || 3000;
const router = require('./middleware/router');
const views = require('koa-views');
const session = require('koa-session');
const bodyParser = require('koa-body');

// inicializa o banco de dados
startDb();

// cria a instancia do app
const app = new Koa();

app.keys = ['your secret key'];
// utilizado para armazenar e recuperar dados da sessão por usuários
app.use(session(app));

app.use(bodyParser());

// registrado antes de router para que ctx.render esteja disponível
// para as definições da rota
app.use(views(`${__dirname}/views`, {
  extension: 'ejs'
}));

// rotas
app.use(router.routes());

// iniciando o servidor
app.listen(port, () => console.log(`Servidor executado em http://localhost:${port}`));