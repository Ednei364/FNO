var button = document.querySelector('[data-js="incluir"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')


button.onclick=  function(){
    for(var i=0; i < parseInt(numeroDeParc.value);i++ ){
        criarpar()
    }
}
 function criarpar(){
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
 }