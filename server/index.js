const Koa = require('koa');
const { normal } = require('./template')
const app = new Koa();
app.use((ctx,next) => {
  ctx.body = normal;
});

app.listen(3000);