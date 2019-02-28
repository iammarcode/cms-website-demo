<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <img :src="'/static/images/' + headerData.logo" class="header-logo-img">
    </router-link>
    <!-- Nav -->
    <div class="header-nav">
      <Menu
        v-for="(item, index) in navList"
        :key="index"
        :navItem="item"
        :itemIndex="index"
        class="header-nav-item"
      />
    </div>
    <!-- Input -->
    <Input class="header-input"/>
    <!-- Concat -->
    <Concat class="header-concat"/>
    <!-- Has Logged/ To Register -->
    <LoginButton class="header-login"/>
  </header>
</template>

<script>
import Menu from '../public/Menu'
import Input from '../public/Input'
import Concat from '../public/Concat'
import LoginButton from '../../components/Login/LoginButton'
export default {
	name: 'Header',
	data() {
		return {
			headerData: {}
		}
	},
	computed: {
		navList() {
			return this.headerData.nav
		}
	},
	components: {
		Menu,
		Input,
		Concat,
		LoginButton
	},
	methods: {
		getHeader() {
			this.$api.get('/api/header').then(data => {
				this.headerData = data.data.data
			})
		}
	},
	mounted() {
		this.getHeader()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) '../../../src/assets/css/constant.less';
.header {
	display: flex;
	.header-logo {
		flex: 0 1;
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
		margin: 0 50px;
		.header-logo-img {
			width: 30px;
			height: 30px;
		}
	}
	.header-nav {
		flex: 1 1;
		display: flex;
		.menu.header-nav-item {
		}
	}
	.header-input {
		flex: 1 1;
		display: flex;
		line-height: 60px;
		justify-content: space-around;
		.el-autocomplete.header-input-com {
			.el-input {
				font-size: 14px;
				.el-input__inner {
					height: 30px;
				}
			}
		}
	}
	.header-concat {
	}
	.header-login {
		width: 100px;
		height: 100%;
		line-height: @header_height;
	}
}
</style>
