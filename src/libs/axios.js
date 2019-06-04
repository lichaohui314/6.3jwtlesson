import axios from 'axios'
class AjaxRequest {
    constructor() {
        this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
        this.timeout = 3000
    }
    merge(options) {
        return { baseURL: this.baseURL, timeout: this.timeout, ...options }
    }
    setInterceptors(instance) {
        // 设置请求拦截器
        instance.interceptors.requset.use(config => {
            config.headers.authorization = 'token'
        }, err => {
            return Promise.reject(err)
        })
        // 设置响应拦截器
        instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            return Promise.reject(err)
        })
    }
    requeset(options) {
        const instance = axios.create()
        // 把传进来的参数和默认参数合并
        const config = this.merge(options)
        // 设置拦截器
        this.setInterceptors(instance)
        return instance(config)
    }
}
export default new AjaxRequest()
