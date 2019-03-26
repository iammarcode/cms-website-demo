<template>
  <div class="user">
    <ToLogin v-if="!isLogin"/>
    <Logined v-if="isLogin"/>
  </div>
</template>

<script>
import ToLogin from './components/ToLogin'
import Logined from './components/Logined'
export default {
	data() {
		return {}
	},
	components: {
		ToLogin,
		Logined
	},
	computed: {
		isLogin() {
			return window.localStorage.getItem('token')
		}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
.user {
	display: flex;
	text-align: right;
	justify-content: center;
	align-items: center;
}
</style>