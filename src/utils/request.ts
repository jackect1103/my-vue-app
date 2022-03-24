import axios from 'axios'


const install = axios.create({
  baseURL:'/api',
  timeout:20000
})


/**
 * 请求拦截器
 */
install.interceptors.request.use(config => {
  console.log('config', config)
  return config
},error => {
  console.log('error', error)
})

/**
 * 响应拦截器
 */
install.interceptors.response.use(response => {
  console.log('response', response)
  return response
},error => {
  console.log('error', error)
})



function request (params:any){
  return new Promise((resolve,reject) => {
    install.request(params)
      .then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
  })
}

export default request