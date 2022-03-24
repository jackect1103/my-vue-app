<template>
  <div class="bottom">
    <span>ref api 解释：</span>
    <span>接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。</span>
  </div>
  <p class="bottom">
    注意：在teplate模板中不需要在.value了，模板已经将数据从.value获取出来
  </p>
  <p class="bottom">
    count：{{ count }}
  </p>

  <p class="bottom">
    它会为简单类型的值生成一个形为 { value: T } 的包装，这样在修改的时候就可以通过 count.value = 3 去触发响应式的更新了
  </p>

  <p>{{ person }}</p>
  <button @click="changeAge">
    改变年龄
  </button>
</template>

<script lang="ts" setup>
import { ref ,Ref} from 'vue'
const count:Ref<number> = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

// 在调用 ref() 时传入一个泛型参数，来覆盖默认的推导行为
// 得到的类型：Ref<string | number>
const year = ref<string | number>('2020')
year.value = 2020 // 成功！

let person:Ref<{
  name:string,
  age?:number,
}> = ref({
  name:'jackect',
  age:18
})

const changeAge =  () => {
  console.log('person', person)
  person.value.age = 19
}
</script>

<style lang="scss" scoped>
</style>