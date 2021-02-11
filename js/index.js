var button = document.querySelector('[data-js="incluir"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var taxa = document.querySelector('[data-js="taxa"]')
var parcela = parseInt(numeroDeParc.value)
var valor =parseInt(valorfinanc.value)
var valorparc = parseInt(valorfinanc.value) /parseInt(numeroDeParc.value)
var i = 1