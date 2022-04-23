// vue-socket.io其实是在socket.io-client基础上做了一层封装
import SocketIO from 'socket.io-client'
import VueSocketIo from 'vue-Socket.io'

let socket  = new VueSocketIo({
  debug: true,
  connection: SocketIO('http://127.0.0.1:10086', {
    autoConnect: true, // 自动连接  
    query: {},
    transports: ['websocket', 'polling'], // 默认值
    timeout: 5000,
  })
})
socket.io.on("connect", () => {
  console.info("监听客户端连接成功-connect");
});



export default socket 