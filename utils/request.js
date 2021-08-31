/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable eol-last */
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://120.77.81.245:8222', // api的base_url
    // eslint-disable-next-line indent
    timeout: 20000 // 请求超时时间
})

service.interceptors.request.use(
    (config) => {
        // do something before request is sent

        if (cookie.get('junyao_token')) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers.token = cookie.get('junyao_token')
        }
        return config
    },
    (error) => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// http response 拦截器
service.interceptors.response.use(
    (response) => {
        if (response.data.code !== 20000) {
            // 25000：订单支付中，不做任何提示
            if (response.data.code !== 25000) {
                Message({
                    message: response.data.message || 'error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
        } else {
            return response
        }
    },
    (error) => {
        return Promise.reject(error.response) // 返回接口返回的错误信息
    })

export default service