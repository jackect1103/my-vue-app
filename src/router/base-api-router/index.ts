import {RouteRecordRaw,} from 'vue-router'

const REF = () => import('views/base-api/ref/index.vue')
const REACTIVE = () => import('views/base-api/reactive/index.vue')
const TOREF = () => import('views/base-api/toRef/index.vue')
const TORAW = () => import('views/base-api/toRaw/index.vue')

const baseApiRouter:Array<RouteRecordRaw> = [{
  path: '/base-api/ref', 
  name: 'REF', 
  component: REF,
},{
  path: '/base-api/reactive', 
  name: 'REACTIVE', 
  component: REACTIVE
},{
  path: '/base-api/toRef', 
  name: 'TOREF', 
  component: TOREF
},{
  path: '/base-api/toRaw', 
  name: 'TORAW', 
  component: TORAW
}]

export default baseApiRouter