/* eslint-disable indent */
import request from '@/utils/request'

export default {
    // 条件分页课程查询的方法
    // eslint-disable-next-line space-before-function-paren
    getCourseList(page, limit, searchObj) {
        return request({
            url: `/eduService/courseFront/getFrontCourseList/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    // 查询所有分类的方法
    // eslint-disable-next-line space-before-function-paren
    getAllSubject() {
        return request({
            url: '/eduService/subject/getAllSubject',
            method: 'get'
        })
    },
    // 课程详情的方法
    // eslint-disable-next-line space-before-function-paren
    getCourseInfo(id) {
        return request({
            url: '/eduService/courseFront/getFrontCourseInfo/' + id,
            method: 'get'
        })
    }
    // eslint-disable-next-line eol-last
}