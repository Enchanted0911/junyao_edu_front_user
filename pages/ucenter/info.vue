<template>
  <el-container>
    <el-header style="background-color: white">
      <p style="font-style: italic; font-size: 30px; text-align: center">
        个人信息
      </p>
    </el-header>
    <el-main>
      <el-form ref="form" :model="userInfo" label-width="80px">
        <el-form-item label="头像">
          <el-avatar :src="userInfo.avatar" :size="130" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="userInfo.nickname" maxlength="10" show-word-limit clearable class="myinput" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="userInfo.sex" placeholder="请选择性别" clearable>
            <el-option label="男" value="1" />
            <el-option label="女" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userInfo.mobile" maxlength="11" show-word-limit clearable class="myinput" />
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker
            v-model="userInfo.birthday"
            type="date"
            clearable
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="签名" class="myinput">
          <!-- <el-input v-model="userInfo.sign" /> -->
          <el-input
            v-model="tabledata"
            maxlength="10"
            show-word-limit
            autosize
            type="textarea"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  layout: 'ucenter',
  props:['tabledata'],
  data () {
    return {
      userInfo: {
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this)
    }
  }
}
</script>
<style>
.myinput {
  width: 50%;
}
</style>
