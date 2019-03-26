<template>
  <div class="user">
    <router-link to="/user/login">Login</router-link>/
    <router-link to="/user/sign-up">Sign Up</router-link>
  </div>
</template>

<script>
export default {
	name: 'loginButton',
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../../../assets/css/constant.less';
.user {
	display: flex;
	text-align: right;
	justify-content: center;
	a:hover {
		color: #33a0fa;
	}
}
</style>