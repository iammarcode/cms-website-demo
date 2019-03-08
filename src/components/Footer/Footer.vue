<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-content-item" v-for="(item, index) in footerData.dataList" :key="index">
        <h3 class="item-title">{{item.title}}</h3>
        <router-link
          v-for="(member, index) in item.list"
          :key="index"
          class="item-member"
          :to="member.url"
        >{{member.name}}</router-link>
      </div>
    </div>
    <div class="footer-copyright">{{footerData.copyright}}</div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	computed: {
		...mapState('footer', ['footerData'])
	},
	methods: {
		...mapMutations(['modifyState']),
		async getFooterData() {
			try {
				// let res = await this.$api.intro.matches('/footer', params)
				let res = await this.$api.intro.getFooter()
				this.modifyState({
					path: 'footer/footerData',
					data: res.data
				})
			} catch (e) {
				console.log('​catch error -> e', e)
			}
		}
	},
	created() {
		this.getFooterData()
	}
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/css/constant.less';
.footer {
	background-color: #4f4f50;
	display: flex;
	flex-direction: column;
	.footer-content {
		flex: 3 3 75%;
		display: flex;
		justify-content: center;
		.footer-content-item {
			color: #fff;
			display: flex;
			flex-direction: column;
			padding: 20px 50px 0 50px;
			.item-title {
				padding-bottom: 10px;
			}
			.item-member {
				color: #999999;
			}
		}
	}
	.footer-copyright {
		flex: 1 1 25%;
		color: #fff;
		background-color: #3c3c3c;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}
</style>