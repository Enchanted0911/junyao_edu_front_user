<template>
  <el-container
    style="position: absolute; height: 100%; width: 100%; border: 1px solid #eee"
  >
    <el-aside width="200px" style="background-color: Transparent">
      <div style="text-align: center">
        <el-avatar
          :size="180"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <el-menu :default-openeds="['1', '5']">
        <el-menu-item index="1">
          <template slot="title">
            <i class="el-icon-user" />个人信息
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-star-off" />我的收藏
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              课程
            </el-menu-item>
            <el-menu-item index="2-2">
              教师
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <template slot="title">
            <i class="el-icon-goods" />已购买
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <template slot="title">
            <i class="el-icon-lock" />安全
          </template>
        </el-menu-item>
        <el-menu-item index="5">
          <template slot="title">
            <i class="el-icon-back" />返回
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container style="position: relative">
      <nuxt :tabledata="tableData" />
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: 'parent'
    }
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
