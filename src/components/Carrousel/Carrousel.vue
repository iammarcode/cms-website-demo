<template>
  <swiper :options="swiperOption" ref="mySwiper" class="carrousel">
    <!-- slides -->
    <swiper-slide class="carrousel-item" v-for="(item, index) in carrouselList" :key="index">
      <div class="carrousel-item-intro">
        <span class="carrousel-intro-title">{{item.title}}</span>
        <span class="carrousel-intro-detail">{{item.detail}}</span>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'carrousel',
	data() {
		return {
			swiperOption: {
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
					reverseDirection: true,
					waitForTransition: true
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					hideOnClick: true
				}
			},
			carrouselList: []
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		},
		backgroundImage() {
			return `background-image: url(../../assets/images/carrousel01.jpeg)`
		}
	},
	methods: {
		getCarrousel() {
			this.$api
				.get('/carrousel')
				.then(result => {
					console.log(result)
					this.carrouselList = result.data.data.carrousel
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.getCarrousel()
		this.swiper.slideTo(3, 1000, false)
	}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
.carrousel {
	height: @carrousel_height;
	width: 100%;
	.carrousel-item {
		height: 100%;
		width: 100%;
		background-color: #6abd83;
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
}
</style>