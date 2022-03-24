<template>
  <div class="bottom">
    <span>toRef 解释：</span>
    <span>可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。</span>
  </div>
  <p>利用ref函数将某个对象中的属性变成响应式数据，<b>修改响应式数据是不会影响到原始数据。</b></p>
  
  <div class="bottom">
    <p>ref和toRef的区别:</p>
    <ul>
      <li>ref本质是拷贝，修改响应式数据不会影响原始数据；toRef的本质是引用关系，修改响应式数据会影响原始数据</li>
      <li>ref数据发生改变，界面会自动更新；<b>toRef当数据发生改变时，界面不会自动更新</b></li>
      <li>toRef传参与ref不同；toRef接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性</li>
      <li>toRef一次仅能设置一个数据</li>
      <li>toRefs，用于批量设置多个数据为响应式数据</li>
      <li>toRefs接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行</li>
    </ul>
  </div>

  <hr class="bottom">
  <p>ref - 原始数据</p>
  <div class="bottom">
    <p>原始数据 -> obj：{{ obj }}</p>
    <p>ref数据 -> newObj：{{ newObj }}</p>
    <button @click="change">
      change函数改变ref数据
    </button>
  </div>

  <hr class="bottom">
  <p>toRef - 原始数据</p>
  <div class="bottom">
    <p>原始数据 -> obj_original：{{ obj_original }}</p>
    <p>toRef数据 -> newObj_original：{{ newObj_original }}</p>
    <button @click="change_original">
      change_original函数改变toRef数据
    </button>
  </div>
  
  <hr class="bottom">
  <p> toRefs - 原始数据</p>
  <div class="bottom">
    <p>原始数据 -> obj_original_toRefs：{{ obj_original_toRefs }}</p>
    <p>toRefs数据 -> newObj_original_toRefs：{{ newObj_original_toRefs }}</p>
    <button @click="change_toRef">
      change_toRef函数改变toRefs数据
    </button>
  </div>

  <hr class="bottom">
  <p> toRef - reactive</p>
  <div class="bottom">
    <p>reactive -> state：{{ state }}</p>
    <p>toRef数据 -> fooRef：{{ fooRef }}</p>
    <button @click="change_original_toRefs">
      change_original_toRefs函数改变toRef数据
    </button>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive,toRef,toRefs} from 'vue';

let obj = {name : 'alice', age : 12};

let newObj= ref(obj.name);

const change = function (){
  newObj.value = 'Tom';
  console.log(obj,newObj)
}

// toRef - 原始数据
let obj_original = {name : 'alice', age : 12};
let newObj_original= toRef(obj_original, 'name');
function change_original(){
  newObj_original.value = 'Tom';
  console.log(obj_original,newObj_original.value)
}

// toRefs - 原始数据

let obj_original_toRefs = {name : 'alice', age : 12};
let newObj_original_toRefs= toRefs(obj_original_toRefs);
function change_original_toRefs(){
  newObj_original_toRefs.name.value = 'Tom';
  newObj_original_toRefs.age.value = 18;
  console.log(obj_original_toRefs,newObj_original_toRefs)
}

// toRef - reactive
const state = reactive({
  foo: 1,
  bar: 2
})
const fooRef = toRef(state, 'foo')
const change_toRef = () =>{
  fooRef.value++
  console.log(state.foo) // 2

  state.foo++
  console.log(fooRef.value) // 3
}



</script>

<style lang="scss" scoped></style>