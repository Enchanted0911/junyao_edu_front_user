/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
import request from '@/utils/request'

export default {

    getPageList(page, limit, courseId) {
        return request({

            url: `/eduService/comment/page-comment/${page}/${limit}`,

            method: 'get',

            params: { courseId }

        })
    },

    addComment(comment) {
        return request({

            url: '/eduService/comment/auth/save',

            method: 'post',

            data: comment

        })
    }

}