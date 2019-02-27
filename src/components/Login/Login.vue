<template>
  <div class="login">
    <a href="https://www.instagram.com" class="login-link" target="blank">
      <svg class="icon icon-login" aria-hidden="true">
        <use xlink:href="#icon-login"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
.login {
	display: flex;
	justify-content: center;
	.login-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		.icon-login {
			font-size: 18px;
		}
	}
}
</style>