<template>
  <div class="register">
    <div class="register-title">注册会员</div>
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="register-form"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="registerForm.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="registerForm.birth"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="持有股票">
        <el-checkbox-group v-model="registerForm.stock">
          <el-checkbox label="恒盛地产" name="stock"></el-checkbox>
          <el-checkbox label="通海金融" name="stock"></el-checkbox>
          <el-checkbox label="华盛基金" name="stock"></el-checkbox>
          <el-checkbox label="格莱美" name="stock"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="registerForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="registerForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
        <el-button @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Message, MessageBox } from 'element-ui'
export default {
	data() {
		var validatePass1 = (rule, value, callback) => {
			// 6-16, number or a-z/A-Z ---> at least 2 of them, and cannot contain blank and chinese
			let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/
			if (!reg.test(value)) {
				callback(
					new Error(
						'Password length must be 6-16 digits and contains letters and characters'
					)
				)
			} else {
				if (this.registerForm.checkPass !== '') {
					this.$refs.registerForm.validateField('checkPass')
				}
				callback()
			}
		}

		// Monitor whether the passwords are the same twice
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('please enter your password again'))
			} else if (value !== this.registerForm.password) {
				callback(new Error('The two passwords are inconsistent!'))
			} else {
				callback()
			}
		}
		return {
			registerForm: {
				email: '',
				password: '',
				name: '',
				birth: '',
				stock: [],
				checkPass: '',
				first: 'first'
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
				password: [
					{
						required: true,
						message: 'Please enter the password',
						trigger: 'blur'
					},
					{
						validator: validatePass1,
						trigger: 'blur'
					}
				],
				checkPass: [
					{
						required: true,
						message: 'Please enter your password again',
						trigger: 'blur'
					},
					{
						validator: validatePass2,
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
		handleLogin() {
			this.$router.push('/user/login')
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let data = this.registerForm
					this.$api.user
						.userRegister(data)
						.then(res => {
							if (res.success) {
								Message({
									type: 'success',
									message: `注册成功，请登录`
								})
								// this.$router.go(0)
								this.$router.push('/user/login')
							} else {
								MessageBox.confirm({
									type: 'error',
									message: '账号已存在'
								})
							}
						})
						.catch(err => {
							console.log(err)
						})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		open() {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					})
				})
		}
	}
}
</script>
<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.register {
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
	.register-title {
		height: 50px;
		min-width: 40%;
		font-size: 20px;
		line-height: 50px;
		padding-left: 80px;
	}
	.register-form {
		min-width: 40%;
		justify-content: center;
	}
}
</style>