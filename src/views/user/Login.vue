<template>
  <div class="login">
    <h3 class="login-title">Log in</h3>
    <el-form
      :model="dynamicValidateForm"
      label-width="100px"
      ref="dynamicValidateForm"
      class="login-form"
    >
      <el-form-item prop="email" label="email" :rules="rules.email">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="password" :rules="rules.password">
        <el-input type="name" v-model="dynamicValidateForm.password"></el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">Log in</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
        <el-button @click="handleRegister">Sign Up</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import Register from '@/views/user/sign-up'
import { mapActions, mapState } from 'vuex'
import { Message } from 'element-ui'
export default {
	name: 'login',
	data() {
		return {
			dynamicValidateForm: {
				email: '',
				password: ''
			},
			rules: {
				email: [
					{
						required: true,
						message: 'Please input the email address',
						trigger: 'blur'
					},
					{
						type: 'email',
						message: 'Please input the correct email address',
						trigger: 'blur'
					}
				],
				password: {
					required: true,
					message: 'Please input this password',
					trigger: 'blur'
				}
			}
		}
	},
	components: {
		Register
	},
	methods: {
		...mapActions('user', ['userToken', 'userData']),
		handleClick(tab, event) {},
		handleRegister() {
			this.$router.push('/user/sign-up')
		},
		// reset
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
		// login
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let data = this.dynamicValidateForm
					this.$api.user.getLogin(data).then(res => {
						console.log('res', res)
						switch (res.code) {
							case 2000:
								Message({
									type: 'success',
									message: res.message
								})
								this.userToken(res.token)
								this.userData(res.data)
								// let redirect = decodeURIComponent(
								// 	this.$route.query.redirect || '/user/hello'
								// )
								// this.$router.push({
								// 	path: redirect
								// })
								this.$router.push({ path: '/user/hello' })
								break
							case 4004:
								Message({
									type: 'error',
									message: res.message,
									duration: 5 * 1000,
									showClose: true
								})
								break
							case 4008:
								Message({
									type: 'error',
									message: res.message,
									duration: 5 * 1000,
									showClose: true
								})
								break
							default:
								Message({
									type: 'error',
									message: '未知错误',
									duration: 4 * 1000,
									showClose: true
								})
								break
						}
					})
				} else {
					console.log('Error Submit!!')
					return false
				}
			})
		}
	}
}
</script>

<style lang='less' scoped>
.login {
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
	.login-title {
		height: 50px;
		min-width: 40%;
		font-size: 20px;
		line-height: 50px;
		padding-left: 80px;
	}
	.login-form {
		min-width: 40%;
		justify-content: center;
	}
	.login-btn {
		padding-left: 100px;
	}
	.datouguai {
	}
}
</style>