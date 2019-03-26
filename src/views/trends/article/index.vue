<template>
  <el-container class="article">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
.article {
	height: 380px;
}
</style>