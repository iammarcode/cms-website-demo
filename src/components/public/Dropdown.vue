<template>
  <el-dropdown class="dropdown">
    <el-button type="primary">
      更多菜单
      <i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item>双皮奶</el-dropdown-item>
      <el-dropdown-item>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
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
.dropdown {
	height: 100px;
}
</style>