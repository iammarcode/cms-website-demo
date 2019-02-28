<template>
  <div id="app">
    <Header class="app-header"/>
    <router-view class="app-content"/>
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
	components: {
		Header
	}
}
</script>

<style scoped lang="less">
@import (reference) './assets/css/constant.less';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: border-box;
	overflow-x: hidden;
	// background-color: #fafafa;

	.app-header {
		height: @header_height;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		background-color: #fff;
		box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
	}
	.app-content {
		background-color: #fafafa;
		min-height: 700px;
	}
}
</style>
