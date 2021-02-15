const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
router.get('/api/hello', (ctx, next) => {
  ctx.body = "Hello, World!"
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(80, '0.0.0.0');
