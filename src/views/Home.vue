<template>
  <div class="home">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './../components/Footer/Footer'
export default {
	name: 'home',
	components: {
		Footer
	},
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../assets/css/constant.less';
.home {
	margin-top: @header_height;
}
</style>