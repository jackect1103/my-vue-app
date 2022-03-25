import {ref,reactive} from 'vue'
import {getTableList,deleteTableList,updateTableList} from '@/api/shopList-api'
interface shopListColumn {
  id:number,
  label:string,
  width?:number
}
export default function usebasetype(num:number){
  const shopListColumn : Array<shopListColumn> = [{
    id:0,
    label:'日期',
  },{
    id:1,
    label:'商品名称',
  },{
    id:2,
    label:'价格',
  },{
    id:3,
    label:'地址',
    width:250
  },{
    id:4,
    label:'图片',
  }]

  const pageIndex = ref(1)
  const pageSize = ref(10)
  const total  = ref(0)
  let tableData = reactive([])
  const params = {
    pageIndex:pageIndex.value,
    pageSize:pageSize.value,
  };
  getTableList(params).then(res=>{
    console.log('res', res)
    tableData = res.data;
    total.value = res.total;
  })
  return {
    shopListColumn,
    
    tableData
  }
}