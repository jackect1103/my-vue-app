
const asidebar = [{
  id:'1',
  label:'基础api',
  path:'/base-api',
  children:[{
    id:'1-1',
    label:'ref',
    path:'/base-api/ref'
  },{
    id:'1-2',
    label:'reactive',
    path:'/base-api/reactive'
  },{
    id:'1-3',
    label:'toRef与toRefs',
    path:'/base-api/toRef'
  },{
    id:'1-5',
    label:'toRaw',
    path:'/base-api/toRaw'
  }]
},{
  id:'2',
  label:'监听api',
  path:'/listen-api',
  children:[{
    id:'2-1',
    label:'computed',
    path:'/listen-api/computed'
  },{
    id:'2-2',
    label:'watch',
    path:'/listen-api/watch'
  }]
},{
  id:'3',
  label:'axios',
  path:'/axios'
},{
  id:'4',
  label:'vue-router',
  path:'/vue-router',
},{
  id:'5',
  label:'pinia(状态管理工具)',
  path:'/pinia',
  children:[]
},{
  id:'6',
  label:'prop-emit',
  path:'/prop-emit',
},{
  id:'7',
  label:'学习typescript',
  path:'/typescript',
  children:[{
    id:'7-1',
    label:'base-type',
    path:'/typescript/base-type'
  }]
},{
  id:'8',
  label:'聊天室',
  path:'/chatroom-koa',
}]

export default asidebar