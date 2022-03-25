import {RouteRecordRaw} from 'vue-router'

const BASETYPE = () => import('views/typescript/base-type/index.vue')

const typescriptRouter:Array<RouteRecordRaw> = [{
  path: '/typescript/base-type', 
  name: 'BASETYPE', 
  component: BASETYPE
}]

export default typescriptRouter