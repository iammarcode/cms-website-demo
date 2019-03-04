<template>
  <div class="user">
    <router-link to="/user/hello" class="user-link">
      <svg class="icon icon-login" aria-hidden="true">
        <use xlink:href="#icon-login"></use>
      </svg>
    </router-link>
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
@import (reference) '../../assets/css/constant.less';
.user {
	display: flex;
	justify-content: center;
	.user-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		.icon-login {
			font-size: 18px;
		}
	}
}
</style>