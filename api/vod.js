/* eslint-disable indent */
import request from '@/utils/request'
export default {
    // eslint-disable-next-line space-before-function-paren
    getPlayAuth(vid) {
        return request({
            url: `/eduVod/video/getPlayAuth/${vid}`,
            method: 'get'
        })
    }

    // eslint-disable-next-line eol-last
}