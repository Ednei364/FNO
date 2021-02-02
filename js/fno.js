var button = document.querySelector('[data-js="incluir"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var parcela = parseInt(numeroDeParc.value)
var valor =parseInt(valorfinanc.value)
var valorparc = valor /parcela
var i = 1

button.onclick=  function(){
    for(var i=0; i < parseInt(numeroDeParc.value);i++ ){
        criarpar()
        
    }
}
 function criarpar(){

    var divNova = document.createElement("tr");
    var conteudoNovo = document.createTextNode(i);
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
    i++
 }