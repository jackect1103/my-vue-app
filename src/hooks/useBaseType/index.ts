import {ref,reactive} from 'vue'
import {getTableList,deleteTableList,updateTableList} from '@/api/shopList-api'
interface shopListColumn {
  id:number,
  label:string,
  type?:string,
  width?:number
}
export default function useBaseType(){
  const shopListColumn : Array<shopListColumn> = [{
    id:0,
    label:'id', 
    type:'id',
  },{
    id:1,
    label:'日期', 
    type:'Date',
  },{
    id:2,
    label:'商品名称',
    type:'name',
  },{
    id:3,
    label:'价格',
    type:'price',
  },{
    id:4,
    label:'地址',
    type:'Address',
    width:250
  },{
    id:5,
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
   * 对象和数组最好用一个大括号包起来,修改数组的时候‘不可以改变原先的数组地址’
   * https://blog.csdn.net/qq_42543244/article/details/123340874
   */
  const tableData = reactive({
    total:null,
    data:[]
  })
  /**
   * 获取商品信息
   * @returns 
   */
  const getTableListHandle = async ():void => {
    const res= await getTableList(params)
    tableData.total = res.data.total
    tableData.data = res.data.data
  }


  const onAddItemHandle = (item) => {
    console.log('onAddItem',item)
  }
  
  const deleteRowHandle = async (id:string):Promise<any> => {
    return await deleteTableList({
      id
    })
  }
  return {
    shopListColumn,
    tableData,

    getTableListHandle,
    onAddItemHandle,
    deleteRowHandle
  }
}