<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部讲师</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="全部" href="#" @click="searchAll()">全部</a>
        </section>
      </header>
      <section style="margin:10px">
        <div>
          <el-form :inline="true" size="mini" class="demo-form-inline" @submit.native.prevent>
            <el-form-item>
              <el-input v-model="teacherName" clearable placeholder="请输入讲师关键字" @keyup.enter.native="gotoPage(1)" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="gotoPage(1)">
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </section>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section v-if="data.total==0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">好像还没有老师愿意来这里...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="i-teacher-list">
            <ul class="of">
              <li v-for="teacher in data.items" :key="teacher.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/'+teacher.id" :title="teacher.name" target="_blank">
                      <img :src="teacher.avatar" :alt="teacher.name">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="'/teacher/'+teacher.id" :title="teacher.name" target="_blank" class="fsize18 c-666">{{ teacher.name }}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{ teacher.intro }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">
                      {{ teacher.career }}
                    </p>
                  </div>
                </section>
              </li>
            </ul>
            <div class="clear" />
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{undisable: !data.hasPrevious}"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
            >首页</a>

            <a
              :class="{undisable: !data.hasPrevious}"
              href="#"
              title="上一页"
              @click.prevent="gotoPage(data.current-1)"
            >&lt;</a>

            <a
              v-for="page in data.pages"
              :key="page"
              :class="{current: data.current == page, undisable: data.current == page}"
              :title="'第'+page+'页'"
              href="#"
              @click.prevent="gotoPage(page)"
            >{{ page }}</a>

            <a
              :class="{undisable: !data.hasNext}"
              href="#"
              title="下一页"
              @click.prevent="gotoPage(data.current+1)"
            >&gt;</a>

            <a
              :class="{undisable: !data.hasNext}"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)"
            >末页</a>

            <div class="clear" />
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import teacherApi from '@/api/teacher'

export default {
  data () {
    return {
      teacherName: '',
      data: {}
    }
  },
  created () {
    this.gotoPage(1)
  },
  methods: {
    // 分页切换的方法
    // 参数是页码数
    gotoPage (page) {
      teacherApi.getTeacherList(page, 8, this.teacherName)
        .then((response) => {
          this.data = response.data.data
        })
    },
    searchAll () {
      this.teacherName = ''
      this.gotoPage(1)
    }
  }

}
</script>
