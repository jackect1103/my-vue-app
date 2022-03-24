import {createRouter, createWebHistory,RouteRecordRaw,} from 'vue-router'
import baseApiRouter from '@/router/base-api-router'
import listenApiRouter from '@/router/listen-api-router'
import typescriptRouter from '@/router/typescript-router'


const Axios = () => import('views/axios-test/index.vue')
const vueRouter = () => import('views/vue-router/index.vue')
const Pinia = () => import('views/pinia/index.vue')
const propEmit = () => import('views/prop-emit/index.vue')

const routes:Array<RouteRecordRaw> = [
  
  ...baseApiRouter,
  ...listenApiRouter,
  ...typescriptRouter,
  {
    path:'/axios',
    name: 'Axios', 
    component: Axios
  },
  {
    path:'/vue-router',
    name: 'vueRouter', 
    component: vueRouter
  },{
    path:'/pinia',
    name: 'pinia', 
    component: Pinia
  },{
    path:'/prop-emit',
    name: 'prop-emit', 
    component: propEmit
  },
  {
    path: "/:params(.*)*",
    component: () => import('views/404.vue')
  }
]

const router = createRouter({
  // history 模式则使用 createWebHistory()
  // hash 模式则使用 createWebHashHistory()
  history: createWebHistory(),    
  routes,
})

export default router