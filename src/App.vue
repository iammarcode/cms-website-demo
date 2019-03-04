<template>
  <div id="app">
    <Header class="app-header"/>
    <router-view class="app-content"/>
    <Footer class="app-footer"/>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default {
	components: {
		Header,
		Footer
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
		margin-top: 60px;
		background-color: #fafafa;
		min-height: calc(100% - @header_height - @footer_height);
		box-sizing: border-box;
	}
	.app-footer {
		height: @footer_height;
		box-sizing: border-box;
	}
}
</style>
