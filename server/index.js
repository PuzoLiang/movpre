const Koa = require('koa');
// const { normal,pugTpl } = require('./template')
const view = require('koa-views');
const { resolve } = require('path');
const app = new Koa();

app.use(view(resolve(__dirname,'./views'),{
  extension: 'pug'
}));
app.use(async (ctx,next) => {
  await ctx.render('index',{
    you: "Mike"
  });
});

app.listen(3000);