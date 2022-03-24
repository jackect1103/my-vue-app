import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'


const app = createApp(App)
app.use(router)
console.log('app.config', app.config)
// router.onReady() 已经替换为 router.isReady()
// 不带任何参数并返回 Promise
router.isReady().then(() => app.mount('#app'))