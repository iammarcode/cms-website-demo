<template>
  <div class="menu">
    <el-dropdown class="menu-item">
      <el-button type="primary" class="menu-item-btn">
        {{navItem.title}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown" class="menu-item-dropdown">
        <el-dropdown-item v-for="(item, index) in navItem.list" :key="index">{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
	props: {
		navItem: {
			type: Object,
			default: () => {}
		},
		itemIndex: {
			type: Number,
			default: 1
		}
	},
	methods: {}
}
</script>

<style lang='less' scoped>
.menu {
	.menu-item {
		height: 100%;
		.menu-item-btn.el-button.menu-item-btn.el-button--primary.el-dropdown-selfdefine {
			background-color: #fff;
			height: 100%;
			border: none;
			padding: 0 10px;
			color: #3c4043;
			font-size: 14px;
			border-radius: 0;
		}
		.menu-item-dropdown {
		}
	}
}
</style>