import {ref,reactive} from 'vue'
import {getTableList,deleteTableList,updateTableList} from '@/api/shopList-api'
interface shopListColumn {
  id:number,
  label:string,
  type?:string,
  width?:number
}
export default function usebasetype(num:number){
  const shopListColumn : Array<shopListColumn> = [{
    id:0,
    label:'日期', 
    type:'Date',
  },{
    id:1,
    label:'商品名称',
    type:'name',
  },{
    id:2,
    label:'价格',
    type:'price',
  },{
    id:3,
    label:'地址',
    type:'Address',
    width:250
  },{
    id:4,
    label:'图片',
    type:'image',
  }]

  const pageIndex = ref(1)
  const pageSize = ref(10)
  
  const params = {
    pageIndex:pageIndex.value,
    pageSize:pageSize.value,
  };

  /**
   * 获取商品信息
   * @returns 
   */
  const getTableListHandle = () => {
    return new Promise(resolve => {
      getTableList(params).then(res=>{
        resolve(res)
        
      })
    })
  }

  const onAddItemHandle = (item) => {
    console.log('onAddItem',item)
  }
  
  const deleteRowHandle = async (id:string) => {
    const res = await deleteTableList({
      id
    })
    console.log('deleteRowHandle',id,res)
  }
  return {
    shopListColumn,
    
    getTableListHandle,
    onAddItemHandle,
    deleteRowHandle
  }
}