<template scope='scope'>
  <div class="hello">
    <div class="hello-info">
      <h3 class="hello-title">{{msgWelcome }} {{username}}</h3>
      <h3 class="hello-stock">{{msgStock }}{{userstock}}</h3>
      <h3 class="hello-email">{{msgConcat }}{{useremail}}</h3>
    </div>
    <el-button type="primary" @click="logout()">登出</el-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Message } from 'element-ui'
export default {
	name: 'hello',
	data() {
		return {
			msgWelcome: '欢迎来到你的通海个人主页, ',
			msgConcat: '联系方式：',
			msgStock: '目前持股：',
			username: '',
			useremail: '',
			userstock: ''
		}
	},
	created() {
		this.username = localStorage.getItem('username')
		this.useremail = localStorage.getItem('useremail')
		this.userstock = localStorage.getItem('userstock')
		// console.log(window.localStorage.getItem('username'))
		// this.username = window.localStorage.getItem('username')
	},
	computed: {
		// ...mapState('user', ['username', 'userstock', 'useremail', 'userbirth'])
	},
	methods: {
		...mapActions('user', ['userLogout']),
		// getUser() {
		// 	let data = {
		// 		email: window.localStorage.getItem('username')
		// 	}
		// 	this.$api.user
		// 		.getUser(data)
		// 		.then(result => {
		// 			if (result.code === 401) {
		// 				this.$router.push('/user/login')
		// 				this.logout()
		// 				Message({
		// 					type: 'info',
		// 					message: result.message + 401
		// 				})
		// 			} else if (result.code === 200) {
		// 				Message({
		// 					type: 'success',
		// 					message: '欢迎回来'
		// 				})
		// 			} else if (result.code === 404) {
		// 				Message({
		// 					type: 'info',
		// 					message: result.message + 404
		// 				})
		// 			}
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// },
		logout() {
			this.userLogout()
			if (!this.$store.state.token) {
				this.$router.push('/user/login')
				Message({
					type: 'success',
					message: '登出成功'
				})
			} else {
				Message({
					type: '',
					message: '登出失败'
				})
			}
		}
	},
	mounted() {
		// this.getUser()
	}
}
</script>

<style scoped lang="less">
.hello {
	margin-top: 100px;
	min-height: 80vh;
	.hello-info {
		margin-bottom: 50vh;
		display: flex;
		flex-direction: column;
		.hello-title {
			padding: 20px 0;
		}
		.hello-stock {
			padding: 20px 0;
		}
		.hello-concat {
			padding: 20px 0;
		}
	}
}
</style>
