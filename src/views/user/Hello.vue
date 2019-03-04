<template scope='scope'>
  <div class="hello">
    <h3>{{ msg }} {{ username }}</h3>
    <p></p>
    <el-button type="primary" @click="logout()">登出</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'hello',
	data() {
		return {
			msg: 'Welcome to Tonghai: ',
			username: ''
		}
	},
	mounted() {
		this.username = localStorage.getItem('username')
	},
	methods: {
		...mapActions('user', ['userLogout']),
		logout() {
			this.userLogout()
			if (!this.$store.state.token) {
				this.$router.push('/user/login')
				this.$message({
					type: 'success',
					message: '登出成功'
				})
			} else {
				this.$message({
					type: 'info',
					message: '登出失败'
				})
			}
		}
	}
}
</script>

<style scoped>
.hello {
	margin-top: 60px;
	min-height: 80vh;
}
</style>
