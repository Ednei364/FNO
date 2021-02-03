var button = document.querySelector('[data-js="incluir"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var parcela = parseInt(numeroDeParc.value)
var valor =parseInt(valorfinanc.value)
var valorparc = valor /parcela
var i = 0

button.onclick=  function(){
    for(var i=0; i < parseInt(numeroDeParc.value);i++ ){
        criarpar()
      //  criarpsar()
        
    }
}
 function criarpar(){
    //var $fragment = document.createDocumentFragment();
    var $tr = document.createElement('tr');

    var trNova = document.createElement("td");
    var trNova1 = document.createElement("td");
    var contParcela = document.createTextNode(i);
    var contParcela = document.createTextNode(i);
    var contParcela = document.createTextNode(i);
    var trAtual = document.getElementById("div1");
    
    //document.body.insertBefore(trNova, trAtual);

    trNova.appendChild(contParcela);
    $tr.appendChild(trNova)
    $tr.appendChild(trNova1)


    document.body.insertBefore($tr, trAtual);


    i++
 }
 function criarpsar(){
    return {
        init: function(){
          console.log('inicio init');// apenas para não me perder
          this.companyInfo();// this neste caso esta referenciando ele mesmo. como se fosse "app.companyInfo()"
          this.initEvents();
        },
  
        initEvents: function initEvents(){
          new DOM('[data-js="form-register"]').on('submit', this.handleSubmit);
        },
  
        handleSubmit: function handleSubmit(e){
          e.preventDefault();
          console.log('submit');
          var $tableCar = $('[data-js="fno"]').get();
          $tableCar.appendChild(app.createNewCar());    
        },

        createNewCar: function createNewCar(){
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var trNova = document.createElement("td");
        var contParcela = document.createTextNode(i);
    //var trAtual = document.getElementById("div1");
        trNova.appendChild(contParcela);    
    //document.body.insertBefore(trNova, trAtual);


    $tr.appendChild(trNova)
    i++
    return $fragment.appendChild($tr);
}  

 }
}