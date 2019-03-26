<template>
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
    <a href="https://web.whatsapp.com" class="header-concat-link" target="blank">
      <svg class="icon icon-whatsapp" aria-hidden="true">
        <use xlink:href="#icon-whatsapp"></use>
      </svg>
    </a>
    <a href="https://twitter.com/?lang=zh-cn" class="header-concat-link" target="blank">
      <svg class="icon icon-twitter" aria-hidden="true">
        <use xlink:href="#icon-twitter"></use>
      </svg>
    </a>
  </div>
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
</style>