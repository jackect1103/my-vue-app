<template>
  <p>采用socket.io-client</p>
  <el-button type="primary" @click="joinroom">加入房间</el-button>
  <el-button type="warning" @click="leaveroom">离开房间</el-button>
  <el-button @click="sendMsgByRoom">发送数据</el-button>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, onMounted } from 'vue'

const { proxy }: any = getCurrentInstance()
onMounted(() => {
  let arr = ref([])
  console.log('proxy.$socket', proxy.$socket)
  // // 房间好友上线通知
  // proxy.$socket.io.on("say", (message) => {
  //   console.log('房间好友上线通知',message);
  // });

  // // 收到的消息
  // proxy.$socket.io.on("receiveMsg", (msg, id) => {
  //   // arr为消息列表
  //   console.log(`arr为消息列表${id}：${msg}`)
  //   arr.value.push(`${id}：${msg}`);
  // });

  // 房间好友上线通知
  proxy.$socket.on("say", (message) => {
    console.log('房间好友上线通知',message);
  });

  // 收到的消息
  proxy.$socket.on("receiveMsg", (msg, id) => {
    // arr为消息列表
    console.log(`arr为消息列表${id}：${msg}`)
    arr.value.push(`${id}：${msg}`);
  });
});

let joinroom = () => {
  proxy.$socket.emit('join', {
    roomid: 111
  });
}
let leaveroom = () => {
  proxy.$socket.emit('leave', {
    roomid: 111
  });
}
let sendMsgByRoom = () => {
  proxy.$socket.emit('sendMsgByRoom', {
    roomid: 111,
    msg: "你好！" + new Date()
  });
}

</script>

<style lang="scss">
</style>