<template>
	<div id="app">
		<cabecalho/>
	</div>
</template>

<script>
import cabecalho from './components/cabecalho.vue'
export default{
  components:{cabecalho}
}

</script>

<style>
#sapp {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

*{
    margin: 0;
    padding:0 ;
}
body{
    background-color:     #f2f4f8;
}
</style>
