import {createRouter, createWebHistory,RouteRecordRaw,} from 'vue-router'
import baseApiRouter from '@/router/base-api-router'
import listenApiRouter from '@/router/listen-api-router'
import typescriptRouter from '@/router/typescript-router'

const HOME = () => import('views/index.vue')
const Login = () => import('views/login/index.vue')
const Register = () => import('views/login/register.vue')
const Axios = () => import('views/axios-test/index.vue')
const vueRouter = () => import('views/vue-router/index.vue')
const Pinia = () => import('views/pinia/index.vue')
const propEmit = () => import('views/prop-emit/index.vue')

const routes:Array<RouteRecordRaw> = [
  {
    path:'/login',
    name: 'Login', 
    component: Login
  },{
    path:'/register',
    name: 'REGISTER', 
    component: Register
  },{
    path:'/',
    name: 'HOME', 
    component: HOME,
    children:[
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
    ],
    meta:{
      requireAuth:true
    }
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