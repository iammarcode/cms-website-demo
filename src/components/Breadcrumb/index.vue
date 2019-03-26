<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item
      :to="{ path: item.path }"
      class="breadcrumb-item"
      v-for="(item, index) in breadcrumb"
      :key="index"
    >{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
	name: 'breadcrumb',
	props: ['breadcrumb'],
	data() {
		return {}
	},

	methods: {}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
.breadcrumb {
	height: 40px;
	line-height: 40px;
	background: #fff;
	padding-left: 60px;
	border-bottom: 1px solid #e8e5ea;
	.breadcrumb-item {
		&:hover {
			color: @link_1;
		}
	}
}
</style>