const KoaRouter = require('koa-router');
const authenticated = require('./authenticated');
const guest = require('./guest');
const user = require('./user');
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');

const router = new KoaRouter();
router.use(user());

// base routes
// autenticação não é requirida
router
  .get('/', postController.index)
  .get('/post/:id/show', postController.show);

// rotas auth
const auth = new KoaRouter()
  .get('/', guest(), authController.index)
  .post('/login', authController.login)
  .post('/register', authController.register)
  .get('/logout', authController.logout);
router.use('/auth', auth.routes());

// rotas do post
const posts = new KoaRouter();
posts
  .use(authenticated())
  .post('/', postController.store)
  .get('/create', postController.create)
  .put('/:id', postController.update)
  .get('/:id/edit', postController.edit); 
router.use('/post', posts.routes());

module.exports = router;