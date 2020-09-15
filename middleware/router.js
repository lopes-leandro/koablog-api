const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('/', ctx => (ctx.body = "Bem vindo ao blog do Koa!!!"));

module.exports = router;