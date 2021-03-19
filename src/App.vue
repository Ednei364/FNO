<template>
	<div id="app">
		<cabecalho/>
		<div>
			<label data-js="erro" id="erro"></label>
		</div>
		<formulario/>


	</div>
</template>

<script>
import cabecalho from './components/cabecalho.vue'
import formulario from './components/formulario.vue'
export default{
  components:{cabecalho, formulario}
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

label#erro{
    background-color: rgb(233, 92, 92);
    font-style: italic;
    font-size: 20px;
    margin-right: 100px;
}

</style>
