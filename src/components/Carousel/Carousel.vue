<template>
  <el-carousel :interval="5000" arrow="hover" :height="'450px'" class="carousel">
    <el-carousel-item
      v-for="(item, index) in carouselData.carousel"
      :key="index"
      class="carousel-item"
      :style="backgroundImage + item.image"
    >
      <div class="carousel-item-intro">
        <span class="carousel-intro-title">{{item.title}}</span>
        <span class="carousel-intro-detail">{{item.detail}}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'carousel',
	data() {
		return {
			carouselList: []
		}
	},
	computed: {
		...mapState('intro', ['carouselData']),
		backgroundImage() {
			return `background-image: url('/static/images/`
		}
	},
	methods: {
		...mapMutations(['modifyState']),
		async getCarrouselData() {
			try {
				let res = await this.$api.intro.getCarousel()
				this.modifyState({
					path: 'intro/carouselData',
					data: res.data
				})
			} catch (e) {
				console.log('​catch error -> e', e)
			}
		}
	},
	mounted() {
		this.getCarrouselData()
	}
}
</script>
<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item {
	background-size: cover;
	.carousel-item-intro {
		height: 100%;
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		.carousel-intro-title {
			font-size: 30px;
			color: aliceblue;
			padding: 20px 0;
		}
		.carousel-intro-detail {
			font-size: 20px;
			color: aliceblue;
			padding: 10px 0 120px 0;
		}
	}
}
</style>