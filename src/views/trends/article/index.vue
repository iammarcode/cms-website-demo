<template>
  <el-container class="article">
    <el-header>
      <div id="title"></div>
    </el-header>
    <!-- <el-aside width="200px">Aside</el-aside> -->
    <el-container>
      <div id="content"></div>
    </el-container>
    <!-- <el-aside width="500px">Aside</el-aside> -->
  </el-container>
</template>

<script>
import $api from '@/api'
import { async } from 'q'
export default {
	data() {
		return {
			article: {}
		}
	},
	methods: {
		async fetchArticle() {
			let res = await $api.intro.getArticle()
			this.article = res.data[0]
			document.getElementById('content').innerHTML = this.article.content
			document.getElementById('title').innerHTML = this.article.title
		},
		showContent() {}
	},
	mounted() {
		this.fetchArticle()
		// this.showContent()
	}
}
</script>

<style lang='less' scoped>
.article {
	font-size: 20px;
	#title {
		font-size: 30px;
		padding: 20px 0 0 0;
	}
	#content {
		padding: 0 200px;
	}
}
</style>