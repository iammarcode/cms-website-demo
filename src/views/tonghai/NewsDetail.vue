<template>
  <div>
    <!-- <Breadcrumb :breadcrumb="newsDetail.breadcrumb"/> -->
    <section class="newsDetail">
      <el-main class="newsDetail-content">
        <div class="newsDetail-content-summary">{{newsDetail.summary}}</div>
        <div class="newsDetail-content-date">{{newsDetail.date}} {{newsDetail.editor}}</div>
        <div class="newsDetail-content-artical">{{newsDetail.artical}}</div>
      </el-main>
      <el-aside class="newsDetail-week">
        <div class="newsDetail-week-title">每周精选</div>
        <div class="newsDetail-week-item" v-for="(item, index) in newsData.newsList" :key="index">
          <img :src="'/static/images/' + item.image_min" class="newsDetail-week-item-img">
          <!-- <div class="newsDetail-week-item-title">{{item.summary}}</div> -->
          <router-link
            :to="'/tonghai/' + item.url"
            class="newsDetail-week-item-title"
          >{{item.summary}}</router-link>
        </div>
      </el-aside>
    </section>
  </div>
</template>

<script>
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'newsDetail',
	computed: {
		...mapState('news', ['newsData'])
	},
	components: {
		// Breadcrumb
	},
	data() {
		return {
			newsDetail: {}
		}
	},
	computed: {
		newsId() {
			return this.$route.params.id
		},
		...mapState('news', ['newsData'])
	},
	methods: {
		...mapMutations(['modifyState']),
		async getNewsData() {
			try {
				let params = {}
				let res = await this.$api.intro.matches('/news', params)
				this.modifyState({
					path: 'news/newsData',
					data: res.data
				})
			} catch (e) {
				console.log('​catch error -> e', e)
			}
		},
		async getNewsList() {
			if (this.newsData.newsTitle === undefined) {
				try {
					let params = {}
					let res = await this.$api.intro.matches('/news', params)
					this.modifyState({
						path: 'news/newsData',
						data: res.data
					})
					this.newsDetail = res.data.newsList.find((item, index) => {
						return index === Number(this.$route.params.id) - 1
					})
				} catch (e) {
					console.log('​catch error -> e', e)
				}
			}
			//
			this.newsDetail = this.newsData.newsList.find((item, index) => {
				return index === Number(this.$route.params.id) - 1
			})
		}
	},
	created() {
		this.getNewsList()
	},
	watch: {
		newsId: function() {
			this.$router.go(0)
		}
	}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
.newsDetail {
	width: 100%;
	display: flex;
	white-space: pre-line;
	background-color: #fff;
	.newsDetail-content {
		flex: 1 1 70%;
		// border: 1px solid #000;
		width: 60%;
		padding: 40px 60px;
		.newsDetail-content-summary {
			font-size: 28px;
			font-weight: 900;
			text-align: left;
		}
		.newsDetail-content-date {
			text-align: left;
			padding: 10px 0;
		}
		.newsDetail-content-artical {
			text-align: left;
			font-size: 18px;
		}
	}
	.newsDetail-week {
		flex: 1 1 30%;
		width: 40%;
		max-height: 750px;
		// border: 1px solid #000;
		padding: 30px 0 0 30px;

		display: flex;
		flex-direction: column;
		.newsDetail-week-title {
			padding-left: 30px;
			text-align: left;
			font-size: 24px;
		}
		.newsDetail-week-item {
			display: flex;
			padding: 20px 15px;
			height: 60px;
			.newsDetail-week-item-img {
				max-width: 80px;
			}
			.newsDetail-week-item-title {
				text-align: left;
				padding: 0 20px;
				font-size: 16px;
				&:hover {
					color: @link_1;
				}
			}
		}
	}
}
</style>