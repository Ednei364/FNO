var corpo = document.querySelector('[data-js="corpo"]');
var frase = document.querySelector('[data-js="frase"]');
var cor = document.querySelector('[data-js="cor"]');
var newFrase = document.querySelector('[data-js="newFrase"]');
var mudarC = document.querySelector('[data-js="a1"]');
var mudardiv = document.querySelector('[data-js="a3"]');
var Excluirdiv = document.querySelector('[data-js="a4"]');
var core= cor.value
var aberto = document.querySelector('[data-js="a2"]');


console.log('Olá mundo')
console.log('Me livrei da maldição')


mudarC.onclick =function mudarCor(){
console.log('olá mundo')
frase.style.color= `#${parseInt(cor.value)}FaF`
frase.innerHTML="você clicou me mudar a cor"
}



cor.onkeyup= function criarr(){
var num = 0
num =  parseInt(num) +  parseInt(cor.value)
if(num > 999){
frase.style.color= "red"
frase.innerHTML=`Numero excede o valor permitido ${num}`
}else{
frase.innerHTML=`Numero permitido ${num}`
frase.style.color= `#${num}FaF`
mudardiv.value = core
console.log(num)
}
}


mudardiv.onclick =function naem(){
console.log('me livrei da maldição')
  var divNova = document.createElement("h3");
  var conteudoNovo = document.createTextNode(newFrase.value)
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("daiv1");
  document.body.insertBefore(divNova, divAtual);


}


Excluirdiv.onclick= function excluir(){
corpo.removeChild(corpo.childNodes[7])
}
