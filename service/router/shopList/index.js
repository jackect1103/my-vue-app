
import KoaRouter from 'koa-router'
const shopListRouter = new KoaRouter() 

import shopListController from '../../controller/shopList/index.js'


shopListRouter.post('/shopList/getList', shopListController.getList.bind(shopListController));
shopListRouter.post('/shopList/update', shopListController.update.bind(shopListController));
shopListRouter.post('/shopList/delete', shopListController.delete.bind(shopListController));






export default shopListRouter;