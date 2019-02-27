<template>
  <div class="home">
    <Carrousel/>
    <Echart/>
    <News/>
  </div>
</template>

<script>
import Carrousel from '../components/Carrousel/Carrousel'
import Echart from '../components/Echart/Echart'
import News from '../components/News/News'
export default {
	name: 'home',
	components: {
		Carrousel,
		Echart,
		News
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