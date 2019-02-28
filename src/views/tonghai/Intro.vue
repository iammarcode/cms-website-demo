<template>
  <div class="intro">
    <Carousel/>
    <News/>
  </div>
</template>

<script>
import Carousel from '../../components/Carousel/Carousel'
import News from '../../components/News/News'
export default {
	name: 'intro',
	components: {
		Carousel,
		News
	},
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
</style>