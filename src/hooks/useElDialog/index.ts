import {ref} from 'vue'

export default function useElDialog(text:string){
  const dialogText = ref(text)
  const dialogVisible = ref(false);
  const curId = ref<string>('')
  const closeDialog = ():void => {
    dialogVisible.value = false
  }

  const openDialog = (id:string):void => {
    dialogVisible.value = true
    curId.value = id
  }
  
  return {
    dialogText,
    dialogVisible,
    curId,
    
    closeDialog,
    openDialog,
  }
}