<template>
  <div class="intro">
    <Carousel/>
    <News/>''
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import News from '@/components/News'
export default {
	name: 'home',
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