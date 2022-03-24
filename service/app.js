const Koa  = require('koa')
const app = new Koa()
console.log(app)

app.use(async ctx => {
  ctx.body = 'Wise Wrong';
 });

 app.listen(3000);