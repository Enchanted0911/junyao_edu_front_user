/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
import request from '@/utils/request'

export default {
    // 登录的方法
    submitLoginUser(userInfo) {
        return request({
            url: '/eduUserCenter/member/login',
            method: 'post',
            data: userInfo
        })
    },

    // 根据token获取用户信息
    getLoginUserInfo() {
        return request({
            url: '/eduUserCenter/member/getMemberInfo',
            method: 'get'
        })
    }

}