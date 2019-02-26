<template>
  <header class="header">
    <div class="header-logo">
      <img src="../../assets/images/logo.png" class="header-logo-img">
    </div>
    <div class="header-nav">
      <Menu
        v-for="(item, index) in navList"
        :key="index"
        :navItem="item"
        :itemIndex="index"
        class="header-nav-menu"
      />
    </div>
    <div class="header-input">
      <Input/>
    </div>
    <div class="header-concat">
      <a href="https://www.instagram.com" class="header-concat-link" target="blank">
        <svg class="icon icon-ins" aria-hidden="true">
          <use xlink:href="#icon-ins"></use>
        </svg>
      </a>
      <a href="https://www.facebook.com" class="header-concat-link" target="blank">
        <svg class="icon icon-facebook" aria-hidden="true">
          <use xlink:href="#icon-facebook"></use>
        </svg>
      </a>
      <a href="https://web.wechat.com" class="header-concat-link" target="blank">
        <svg class="icon icon-wechat" aria-hidden="true">
          <use xlink:href="#icon-wechat"></use>
        </svg>
      </a>
      <a href="https://twitter.com/?lang=zh-cn" class="header-concat-link" target="blank">
        <svg class="icon icon-twitter" aria-hidden="true">
          <use xlink:href="#icon-twitter"></use>
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
import Menu from '../public/Menu'
import Input from '../public/Input'
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
		Input
	},
	methods: {
		getHeader() {
			this.$api.get('/header').then(data => {
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
	height: @header_height;
	border-bottom: 1px solid #e6e6e6;
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
		flex-flow: row nowrap;
		margin: 0 40px;
	}
	.header-input {
		flex: 1 1;
	}
	.header-concat {
		flex: 0 1;
		height: 60px;
		line-height: 60px;
		display: flex;
		// justify-content: space-between;
		a.header-concat-link {
			flex: 1 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 5px;
			.icon {
				font-size: 18px;
			}
		}
	}
}
</style>
