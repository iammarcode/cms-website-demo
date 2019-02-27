<template>
  <div id="app">
    <Header class="app-header"/>
    <router-view/>
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
	.app-header {
		height: @header_height;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
}
</style>
