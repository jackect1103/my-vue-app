import Mock from 'mockjs'
const Random = Mock.Random
class ShopListController{
  constructor(){
    this.dataList = []
    for (let i = 0; i < 100; i++) {
      this.dataList.push({
        id: i,
        name: Random.cname(),
        Date: Random.date('yyyy-MM-dd') ,
        price: Random.integer(10,1000),
        Address: Random.city(true),
        image:Random.image('200x100', '#4A7BF7')
      })
    }
  }

  getList(ctx,next){
    const info = ctx.request.body;
    let dataList = this.dataList
    const [index, size, total] = [info.pageIndex - 1, info.pageSize, dataList.length]
    const len= total / size
    const totalPages = len - parseInt(len) >= 0 ? parseInt(len) + 1 : len
    const newDataList = dataList.slice(index * size, (index + 1) * size)
    ctx.body = {
      'code':0,
      'data':{
        'total': dataList.length,
        'data': newDataList,
        'totalPages': totalPages
      },
      "message": "OK!",
      "msg": "OK!",
      "subCode": null,
      "subMsg": null
    }
  }
  
  update(ctx,next) {
    const info = ctx.query;
    let curItem = {};
    let result = {}
    
    if (Object.keys(info).length != 0) {
      this.dataList = this.dataList.map(item => {
        if ( item.id == info.id ){
          for (const key of Object.keys(info)) {
            item[key] = info[key]
          }
          curItem = item
        }
        return item
      })
      result = {
        'code':0,
        'data':curItem,
        "message": "修改成功!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    } else {
      result = {
        'code':0,
        "message": `修改失败，商品id=${info?.id}!`,
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    }
    ctx.body = result
  }

  delete (ctx,next){
    const info = ctx.query;
    let body = {}
    if (info.id) {
      this.dataList.splice(info.id, 1);
      body = {
        'code':0,
        "message": "删除成功!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    } else {
      body = {
        'code':0,
        "message": "删除失败!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    }
    ctx.body = body
  }
}


const shopListController = new ShopListController()
export default shopListController