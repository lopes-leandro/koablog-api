const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('/', ctx => ctx.render('index'));

module.exports = router;