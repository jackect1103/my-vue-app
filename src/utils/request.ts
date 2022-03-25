import axios from 'axios'
/**
 * vite使用process必须采用这种方式
 * import.meta.env
 */
console.log('import.meta.env.VITE_APP_BASE_API',import.meta.env)

const process = import.meta.env
const baseURL:string | boolean  |undefined = (!process.DEV && process.VITE_OPEN_PROXY === 'true')
  ? process.VITE_APP_API_BASEURL  
  : '/api' 
console.log('baseURL', baseURL)
const install = axios.create({
  baseURL,
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
  if (response.status === 200) {
    return Promise.resolve(response.data) 
  }
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