var button = document.querySelector('[data-js="incluir"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var parcela = parseInt(numeroDeParc.value)
var valor =parseInt(valorfinanc.value)
var valorparc = valor /parcela
var i = 1

button.onclick=  function(){
    for(var i=0; i < parseInt(numeroDeParc.value);i++ ){
      //  criarpar()
        criarpsar()
        
    }
}
 function criarpar(){
  //  var $fragment = document.createDocumentFragment();
   // var $tr = document.createElement('tr');

    var trNova = document.createElement("td");
    var contParcela = document.createTextNode(i);
    var trAtual = document.getElementById("div1");
    trNova.appendChild(contParcela);    
    document.body.insertBefore(trNova, trAtual);


    //$tr.appendChild(trNova)
    i++
 }
 function criarpsar(){
    var $fragment = document.createDocumentFragment();
    var $tr = document.createElement('tr');
    var trNova = document.createElement("td");
    var contParcela = document.createTextNode(i);
    //var trAtual = document.getElementById("div1");
    trNova.appendChild(contParcela);    
    document.body.insertBefore(trNova, trAtual);


    $tr.appendChild(trNova)

    return $fragment.appendChild($tr);
    i++

 }