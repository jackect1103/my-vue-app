
import {Ref,ref,reactive} from 'vue'

export default function useProduct (infos,rules) {
  const productVisible:Ref<boolean> = ref(false)
  const ruleFormRef = ref()
  const productInfos = reactive(infos)

  const productRules = reactive(rules)
  const closeProductDialog = (e:Event) => {
    productVisible.value = false
  }
  
  const addProductHasndle = (formEl) => {
    return new Promise(resolve => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) resolve(true) 
        resolve(false) 
      })
    })
  }

  return {
    ruleFormRef,
    productVisible,
    productInfos,
    productRules,

    closeProductDialog,
    addProductHasndle
  }
}