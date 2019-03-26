<template scope='scope'>
  <div class="hello">
    <div class="hello-info">
      <img class="hello-avatar" :src="userData.avatar">
      <h3 class="hello-title">{{msgWelcome }} {{userData.name}}</h3>
      <h3 class="hello-stock">{{msgStock }}{{userData.stock}}</h3>
      <h3 class="hello-email">{{msgConcat }}{{userData.email}}</h3>
      <h3 class="hello-time">{{msgTime }}{{userData.create_time.slice(0, 10)}}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Message } from 'element-ui'
export default {
	name: 'hello',
	data() {
		return {
			msgWelcome: 'Welcome to your homepage, ',
			msgConcat: 'Concat：',
			msgStock: 'Stock：',
			msgTime: 'Create_Time：',
			userData: ''
		}
	},
	created() {
		this.userData = JSON.parse(localStorage.getItem('userData'))
	},
	computed: {},
	methods: {
		...mapActions('user', ['userLogout']),
		getUser() {
			let data = {
				email: JSON.parse(localStorage.getItem('userData')).email
			}
			this.$api.user
				.getHello(data)
				.then(result => {
					if (result.code === 2000) {
						// Message({
						// 	type: 'success',
						// 	message: result.message,
						// 	duration: 1 * 1000
						// })
					} else if (result.code === 4004) {
						Message({
							type: 'error',
							message: result.message
						})
					}
					console.log('hello: ', result)
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.getUser()
	}
}
</script>

<style scoped lang="less">
.hello {
	margin-top: 100px;
	min-height: 80vh;
	display: flex;
	flex-direction: column;

	.hello-avatar {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
	.hello-title {
		padding: 20px 0;
	}
	.hello-stock {
		padding: 20px 0;
	}
	.hello-concat {
		padding: 20px 0;
	}
	.hello-time {
		padding: 20px 0;
	}
}
</style>
