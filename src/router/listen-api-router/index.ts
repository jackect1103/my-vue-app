import {RouteRecordRaw,} from 'vue-router'

const COMPUTED = () => import('views/listen-api/computed/index.vue')
const WATCH = () => import('views/listen-api/watch/index.vue')

const listenApiRouter:Array<RouteRecordRaw> = [{
  path: '/listen-api/computed', 
  name: 'COMPUTED', 
  component: COMPUTED
},{
  path: '/listen-api/watch', 
  name: 'WATCH', 
  component: WATCH
}]

export default listenApiRouter