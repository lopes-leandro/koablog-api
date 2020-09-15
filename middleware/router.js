const KoaRouter = require('koa-router');
const router = new KoaRouter();
const authController = require('../controllers/authController');
const authenticated = require('./authenticated');
const guest = require('./guest');
const user = require('./user');

router.use(user());

router.get('/', ctx => ctx.render('index', {title: 'Bem-vindo'}));

// rotas auth
const auth = new KoaRouter()
  .get('/', guest(), authController.index)
  .post('/login', authController.login)
  .post('/register', authController.register)
  .get('/logout', authController.logout);

// sub-rotas em nossas rotas principais
router.use('/auth', auth.routes());

module.exports = router;