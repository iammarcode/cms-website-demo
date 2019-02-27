<template>
  <el-carousel :interval="5000" arrow="hover" :height="'450px'" class="carrousel">
    <el-carousel-item v-for="(item, index) in carrouselList" :key="index" class="carrousel-item">
      <div class="carrousel-item-intro">
        <span class="carrousel-intro-title">{{item.title}}</span>
        <span class="carrousel-intro-detail">{{item.detail}}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
	name: 'carrousel',
	data() {
		return {
			carrouselList: []
		}
	},
	computed: {
		backgroundImage() {
			return `background-image: url(../../assets/images/carrousel01.png)`
		}
	},
	methods: {
		getCarrousel() {
			this.$api
				.get('/carrousel')
				.then(result => {
					this.carrouselList = result.data.data.carrousel
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.getCarrousel()
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
	background-image: url('../../assets/images/carrousel03.png');
	background-size: cover;
	.carrousel-item-intro {
		height: 100%;
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		.carrousel-intro-title {
			font-size: 30px;
			color: aliceblue;
			padding: 20px 0;
		}
		.carrousel-intro-detail {
			font-size: 20px;
			color: aliceblue;
			padding: 10px 0 120px 0;
		}
	}
}
</style>