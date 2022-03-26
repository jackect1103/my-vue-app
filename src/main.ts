import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// https://arco.design/vue/docs/start
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';



const app = createApp(App)
app.use(router)
app.use(ArcoVue);
// router.onReady() 已经替换为 router.isReady()
// 不带任何参数并返回 Promise
router.isReady().then(() => app.mount('#app'))