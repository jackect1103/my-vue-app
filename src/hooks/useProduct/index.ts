
import {Ref,ref,reactive} from 'vue'

export default function useProduct () {
  const productVisible:Ref<boolean> = ref(false)
  const productInfos = reactive({
    name:'',
    price:'',
    Date:'',
    Address:'',
    image:'',
  })

  const productRules = reactive({})
  const closeProductDialog = (e:Event) => {
    productVisible.value = false
  }
  
  const addProductHasndle = (e:Event) => {
  }

  return {
    productVisible,
    productInfos,
    productRules,

    closeProductDialog,
    addProductHasndle
  }
}