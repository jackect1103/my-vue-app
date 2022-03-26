
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
const app = new Koa()
const PORT = 10086 ;
app.use(bodyparser())


import shopListRouter from './router/shopList/index.js'
app.use(shopListRouter.routes()).use(shopListRouter.allowedMethods())


app.listen(PORT,() => {
  console.log(`启动成功，${ "http://127.0.0.1"}:${PORT}`);
});