<template>
  <div id="app">
    <Header/>
    <Carrousel/>
    <Echart/>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Carrousel from './components/Carrousel/Carrousel'
import Echart from './components/Echart/Echart'

export default {
	name: 'app',
	components: {
		Header,
		Carrousel,
		Echart
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
