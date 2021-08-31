/* eslint-disable indent */
import request from '@/utils/request'

export default {
    // 根据手机号发验证码
    // eslint-disable-next-line space-before-function-paren
    sendCode(phone) {
        return request({
            url: `/eduMsm/msm/send/${phone}`,
            method: 'get'
        })
    },

    // 注册的方法
    // eslint-disable-next-line space-before-function-paren
    registerMember(formItem) {
        return request({
            url: '/eduUserCenter/member/register',
            method: 'post',
            data: formItem
        })
    }

    // eslint-disable-next-line eol-last
}