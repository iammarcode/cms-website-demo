<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <img :src="'/static/images/' + headerData.logo" class="header-logo-img">
    </router-link>
    <!-- Nav -->
    <div class="header-nav">
      <Menu
        v-for="(item, index) in headerData.nav"
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
import LoginButton from '../../components/Button'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'Header',
	computed: {
		...mapState('intro', ['headerData'])
	},
	//TODO:
	components: {
		Menu,
		Input,
		Concat,
		LoginButton
	},
	methods: {
		...mapMutations(['modifyState']),
		async getHeaderData() {
			try {
				let res = await this.$api.intro.getHeader()
				this.modifyState({
					path: 'intro/headerData',
					data: res.data
				})
			} catch (e) {
				console.log('​catch error -> e', e)
			}
		}
	},
	mounted() {
		this.getHeaderData()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) '../../../src/assets/css/constant.less';
.header {
	display: flex;
	align-items: center;
	.header-logo {
		flex: 1 1 10%;
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
		padding: 0 30px;
		.header-logo-img {
			width: 30px;
			height: 30px;
		}
	}
	.header-nav {
		flex: 4 4 40%;
		display: flex;
		.menu.header-nav-item {
		}
	}
	.header-input {
		flex: 2 2 30%;
		display: flex;
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
		flex: 0 2 10%;
	}
	.header-login {
		flex: 1 1 10%;
		width: 100px;
		height: 100%;
	}
}
</style>
