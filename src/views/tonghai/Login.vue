<template>
  <div id="login" :model="loginForm">
    <el-form :rules="loginRulers">
      <h3>用户登录</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          name="username"
          placeholder="请输入用户名/手机号"
          auto-complete="on"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.password"
          name="password"
          placeholder="请输入密码"
          auto-complete="on"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			username: '',
			password: '',
			loginRules: {
				username: [
					{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				]
			}
		}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
#login {
	min-height: 500px;
	.el-input {
		width: 300px;
	}
}
</style>