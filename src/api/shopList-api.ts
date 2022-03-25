import request from "@/utils/request"

export function getTableList (params:any):Promise<any>{
  return request({
    url: '/shopList/getList',
    method: 'post',
    data: params
  })
}

export function deleteTableList(params: any): Promise<any> {
  return request({
    url: '/shopList/delete',
    method: 'post',
    data: params
  })
}
export function updateTableList(params: any): Promise<any> {
  return request({
    url: '/shopList/update',
    method: 'post',
    data: params
  })
}