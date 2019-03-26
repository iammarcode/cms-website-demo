<template>
  <div class="layout">
    <router-view class="layout-view"></router-view>
  </div>
</template>

<script>
export default {
	name: 'layout',
	components: {},
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../assets/css/constant.less';
.layout {
	.layout-view {
		height: 70vh;
	}
}
</style>