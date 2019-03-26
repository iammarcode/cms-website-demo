<template>
  <div class="logined">
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="userData.avatar" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/user/hello">
          <el-dropdown-item>Homepage</el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {}
	},
	computed: {
		userData() {
			return JSON.parse(window.localStorage.getItem('userData'))
		}
	},

	methods: {
		...mapActions('user', ['userLogout']),
		logout() {
			this.userLogout()
			this.$router.go(0)
		}
	}
}
</script>

<style lang='less' scoped>
.logined {
	height: 100%;
	.avatar-container {
		height: 50px;
		display: inline-block;
		position: absolute;
		right: 35px;
		.avatar-wrapper {
			cursor: pointer;
			margin-top: 15px;
			position: relative;
			line-height: initial;
			.user-avatar {
				width: 40px;
				height: 40px;
				border-radius: 100%;
			}
			.el-icon-caret-bottom {
				position: absolute;
				right: -20px;
				top: 25px;
				font-size: 12px;
			}
		}
	}
}
</style>