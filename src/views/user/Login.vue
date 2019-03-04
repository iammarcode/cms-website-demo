<template>
  <div class="login">
    <el-row>
      <el-col :span="10" :offset="7">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户登录" name="first">
            <el-col>
              <el-form :model="dynamicValidateForm" label-width="100px" ref="dynamicValidateForm">
                <el-form-item prop="email" label="邮箱" :rules="rules.email">
                  <el-input v-model="dynamicValidateForm.email"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码" :rules="rules.password">
                  <el-input type="password" v-model="dynamicValidateForm.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
                <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="用户注册" name="second">
            <Register></Register>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Register from '../../views/user/Register'
import { mapActions } from 'vuex'
export default {
	name: 'login',
	data() {
		return {
			dynamicValidateForm: {
				email: '',
				password: ''
			},
			activeName: this.$store.state.activeName,
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
		...mapActions('user', ['userLogin', 'userName']),
		handleClick(tab, event) {},
		// reset
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
		// login
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let data = this.dynamicValidateForm
					this.$api.user.userLogin(data).then(res => {
						// }
						if (!data.info) {
							this.$message({
								type: 'info',
								message: "Account don't exit"
							})
						}
						if (res.success) {
							console.log(res)
							this.$message({
								type: 'success',
								message: 'Login successful'
							})
							// this.$store.dispatch('userLogin', res.token)
							// this.$store.dispatch('userName', res.email)
							// this.userLogin(res.token)
							this.userLogin(res.token)
							this.userName(res.email)
							let redirect = decodeURIComponent(
								this.$route.query.redirect || '/user/hello'
							)
							console.log(redirect)
							this.$router.push({
								path: redirect
							})
						} else {
							this.$message({
								type: 'info',
								message: 'Password incorrect'
							})
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
</style>