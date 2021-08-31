/* eslint-disable indent */
import request from '@/utils/request'

export default {
    // 分页讲师查询的方法
    // eslint-disable-next-line space-before-function-paren
    getTeacherList(page, limit, teacherName) {
        return request({
            url: `/eduService/teacherFront/getTeacherFrontList/${page}/${limit}`,
            method: 'get',
            params: {
                teacherName
            }
        })
    },
    // 讲师详情的方法
    // eslint-disable-next-line space-before-function-paren
    getTeacherInfo(id) {
        return request({
            url: `/eduService/teacherFront/getTeacherFrontInfo/${id}`,
            method: 'get'
        })
    }

    // eslint-disable-next-line eol-last
}