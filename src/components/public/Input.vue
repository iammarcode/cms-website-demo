<template>
  <div class="header-input">
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="输入你想查询的内容"
      @select="handleSelect"
      class="header-input-com"
      @focus="getInputData"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
	data() {
		return {
			restaurants: [],
			state4: '',
			timeout: null
		}
	},
	methods: {
		loadAll() {
			return this.inputData
		},
		querySearchAsync(queryString, cb) {
			var restaurants = this.restaurants
			var results = queryString
				? restaurants.filter(this.createStateFilter(queryString))
				: restaurants

			clearTimeout(this.timeout)
			this.timeout = setTimeout(() => {
				cb(results)
			}, 3000 * Math.random())
		},
		createStateFilter(queryString) {
			return state => {
				return (
					state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
				)
			}
		},
		handleSelect(item) {
			console.log(item)
		},
		getInputData() {
			this.$api.get('/api/header').then(data => {
				this.restaurants = data.data.data.inputData
			})
		}
	},
	mounted() {
		this.restaurants = this.loadAll()
	}
}
</script>

<style lang='less' scoped>
.header-input {
	height: 100%;
	line-height: 60px;
	.el-autocomplete.header-input-com {
		.el-input {
			.el-input__inner {
				margin-top: 10px;
			}
		}
	}
}
</style>