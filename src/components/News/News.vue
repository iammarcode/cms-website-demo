<template>
  <section class="news">
    <div class="news-title">{{newsTitle}}</div>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="(item, index) in newsList" :key="index" class="news-item">
        <div class="news-artical-img">
          <img :src="'/static/images/' + item.image">
        </div>
        <router-link :to="'/tonghai/' + item.url" class="news-summary">{{ item.summary }}</router-link>
        <div class="news-date">{{item.date}} {{item.editor}}</div>
        <div class="news-artical">{{ item.artical}}</div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
	name: 'news',
	components: {},
	data() {
		return {
			newsTitle: '',
			newsList: '',
			newsDate: ''
		}
	},
	methods: {
		async getNewsData() {
			var newData = await this.$api.get('/api/new')
			this.newsTitle = newData.data.data.newsTitle
			this.newsList = newData.data.data.newsList
		}
	},
	mounted() {
		this.getNewsData()
	}
}
</script>
<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.news {
	padding: 30px 0;
	background-color: #fafafa;
	.news-title {
		font-size: 24px;
		padding: 20px 0 20px 0;
	}
	.news-item {
		display: flex;
		flex-direction: column;
		.news-artical-img {
			height: 40%;
			padding: 20px 0 20px 0;
			img {
				height: 100%;
				&:hover {
					transform: scale(1.2);
					transition: all 0.9s;
				}
			}
		}
		.news-summary {
			font-size: 20px;
			padding-bottom: 5px;
			color: @black_2;
			&:hover {
				color: @link_1;
			}
		}
		.news-date {
			font-size: 14px;
			padding-bottom: 5px;
			color: @black_5;
		}
		.news-artical {
			overflow-y: scroll;
			font-size: 18px;
			padding: 10px 20px 20px 20px;
			color: @black_3;
		}
	}
}
// .el-carousel__item h3 {
// 	color: #475669;
// 	font-size: 14px;
// 	opacity: 0.75;
// 	line-height: 200px;
// 	margin: 0;
// }

.el-carousel__item {
	background-color: #b9d0ce;
}
</style>