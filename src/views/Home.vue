<template>
  <div class="home">
    <router-view class="home-view"></router-view>
  </div>
</template>

<script>
export default {
	name: 'home',
	components: {},
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../assets/css/constant.less';
.home {
	.home-view {
		height: 100%;
	}
}
</style>