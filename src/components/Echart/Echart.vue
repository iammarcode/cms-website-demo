<template>
  <div class="chart-container">
    <div id="myChart" ref="myChart"></div>
    <div class="chart-tips">{{tips}}</div>
    <div class="chart-statement01">{{statement01}}</div>
    <div class="chart-statement02">{{statement02}}</div>
  </div>
</template>

<script>
// init color
var upColor = '#ec0000'
var upBorderColor = '#8A0000'
var downColor = '#00da3c'
var downBorderColor = '#008F28'

import echarts from 'echarts'
import { Promise } from 'q'

// splitData
function splitData(rawData) {
	var categoryData = []
	var values = []
	for (var i = 0; i < rawData.length; i++) {
		categoryData.push(rawData[i].splice(0, 1)[0])
		values.push(rawData[i])
	}
	return { categoryData: categoryData, values: values }
}

export default {
	data() {
		return {
			initData: [],
			tips: '',
			statement01: '',
			statement02: '',
			echartOption: {
				title: {
					text: '',
					left: 0
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				legend: {
					data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
				},
				grid: {
					left: '10%',
					right: '10%',
					bottom: '15%'
				},
				xAxis: {
					type: 'category',
					data: [],
					scale: true,
					boundaryGap: false,
					axisLine: {
						onZero: false
					},
					splitLine: {
						show: false
					},
					splitNumber: 20,
					min: 'dataMin',
					max: 'dataMax'
				},
				yAxis: {
					scale: true,
					splitArea: {
						show: true
					}
				},
				dataZoom: [
					{
						type: 'inside',
						start: 50,
						end: 100
					},
					{
						show: true,
						type: 'slider',
						y: '90%',
						start: 50,
						end: 100
					}
				],
				// calculateMA
				series: [
					{
						name: '日K',
						type: 'candlestick',
						data: [],
						itemStyle: {
							normal: {
								color: upColor,
								color0: downColor,
								borderColor: upBorderColor,
								borderColor0: downBorderColor
							}
						},
						markPoint: {
							label: {
								normal: {
									formatter: function(param) {
										return param != null ? Math.round(param.value) : ''
									}
								}
							},
							data: [
								{
									name: 'XX标点',
									coord: ['2013/5/31', 2300],
									value: 2300,
									itemStyle: {
										normal: {
											color: 'rgb(41,60,85)'
										}
									}
								},
								{
									name: 'highest value',
									type: 'max',
									valueDim: 'highest'
								},
								{
									name: 'lowest value',
									type: 'min',
									valueDim: 'lowest'
								},
								{
									name: 'average value on close',
									type: 'average',
									valueDim: 'close'
								}
							],
							tooltip: {
								formatter: function(param) {
									return param.name + '<br>' + (param.data.coord || '')
								}
							}
						},
						markLine: {
							symbol: ['none', 'none'],
							data: [
								[
									{
										name: 'from lowest to highest',
										type: 'min',
										valueDim: 'lowest',
										symbol: 'circle',
										symbolSize: 10,
										label: {
											normal: {
												show: false
											},
											emphasis: {
												show: false
											}
										}
									},
									{
										type: 'max',
										valueDim: 'highest',
										symbol: 'circle',
										symbolSize: 10,
										label: {
											normal: {
												show: false
											},
											emphasis: {
												show: false
											}
										}
									}
								],
								{
									name: 'min line on close',
									type: 'min',
									valueDim: 'close'
								},
								{
									name: 'max line on close',
									type: 'max',
									valueDim: 'close'
								}
							]
						}
					},
					{
						name: 'MA5',
						type: 'line',
						data: [],
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					},
					{
						name: 'MA10',
						type: 'line',
						data: [],
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					},
					{
						name: 'MA20',
						type: 'line',
						data: [],
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					},
					{
						name: 'MA30',
						type: 'line',
						data: [],
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					}
				]
			}
		}
	},
	methods: {
		setEchartOption() {
			// data0
			var data0 = splitData(this.initData)
			// set echartOption data
			this.echartOption.xAxis.data = data0.categoryData
			this.echartOption.series[0].data = data0.values
			// calculateMA
			function calculateMA(dayCount) {
				var result = []
				for (var i = 0, len = data0.values.length; i < len; i++) {
					if (i < dayCount) {
						result.push('-')
						continue
					}
					var sum = 0
					for (var j = 0; j < dayCount; j++) {
						sum += data0.values[i - j][1]
					}
					result.push(sum / dayCount)
				}
				return result
			}
			// set echartOption data
			this.echartOption.series[1].data = calculateMA(5)
			this.echartOption.series[2].data = calculateMA(10)
			this.echartOption.series[3].data = calculateMA(20)
			this.echartOption.series[4].data = calculateMA(30)
		},
		getEchartData() {
			new Promise((resolve, reject) => {
				this.$api
					.get('/echart')
					.then(result => {
						resolve(result)
					})
					.catch(err => {
						reject(err)
					})
			})
				.then(result => {
					this.initData = result.data.data.compositeIndex
					this.setEchartOption()
					this.echartOption.title.text = result.data.data.text // test
					this.tips = result.data.data.tips // tips
					this.statement01 = result.data.data.statement01 // statement01
					this.statement02 = result.data.data.statement02 // statement02
					// console.log(this.initData)
					this.myChart = echarts.init(document.getElementById('myChart'))
					this.myChart.setOption(this.echartOption, true)
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.getEchartData()
	}
}
</script>

<style lang='less' scoped>
.chart-container {
	// border: 1px solid #000;
	margin: 20px auto 10px auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	#myChart {
		width: 80%;
		height: 500px;
		margin: 10px auto 0 auto;
	}
	.chart-tips {
	}
	.chart-statement01 {
		// padding: 40px 20px;
		// width: 80%;
		text-align: left;
		padding: 10px 30px 10px 40px;
	}
	.chart-statement02 {
		text-align: left;
		padding: 0px 30px 10px 40px;
	}
}
</style>