var button = document.querySelector('[data-js="incluir"]')
var erro = document.querySelector('[data-js="erro"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var taxa = document.querySelector('[data-js="taxa"]')
var parcela = parseInt(numeroDeParc.value)
var valor =parseInt(valorfinanc.value)
//var valorparc = parseInt(valorfinanc.value) /parseInt(numeroDeParc.value)
var i = 1
var paras;
//var $tr = document.querySelector('[data-js="tr"]')

button.onclick=  function(){
    
    if(isNaN(parseInt(valorfinanc.value))||parseInt(valorfinanc.value)<1 ){// ||parcela!=String|| taxa !=String){
        erro.innerHTML="valor não informado"
    }else if(isNaN(parseInt(numeroDeParc.value))||parseInt(numeroDeParc.value)<1){
        erro.innerHTML="Parcela não informada"
    }else if(isNaN(parseInt(taxa.value))||parseInt(taxa.value)<0.0000005) {
        erro.innerHTML="Taxa não informada"
    }else{
        
        if(paras>0){
            console.log(`sss ${paras}`)
            erro.innerHTML="Contrato já lançado, favor atualizar a página para nova simulação"
            
        }else{
            for(var i=0; i < parseInt(numeroDeParc.value);i++ ){
                erro.innerHTML=""
                //   console.log(parseInt(i))
                   criarpar()
                   criarpsar() 
               }
        }
        paras=1  
    }     
    }
    

 function criarpar(){
    var valorparc = parseInt(valorfinanc.value) /parseInt(numeroDeParc.value)
    var saldo = (parseInt(valorfinanc.value)-(valorparc*i))
    var taxa1 =(saldo * parseInt(taxa.value)/100)
    
    //var $fragment = document.createDocumentFragment();
    var $tr = document.createElement('tr');

    var trNova = document.createElement("td"); //node
    var contParcela = document.createTextNode(`Parc ${i}`);

    var trNova1 = document.createElement("td");//node
    var contParcela1 = document.createTextNode(`Amortização  ${valorparc}`);

    var trNova2 = document.createElement("td");//node
    var contParcela2 = document.createTextNode(`  Juros  ${taxa1}`);
    
    var trNova3 = document.createElement("td");//node
    var contParcela3 = document.createTextNode(`  Saldo  ${saldo}`);



    var trAtual = document.getElementById("div1");
   // var trAtual = document.getElementById("div21");
    
    //document.body.insertBefore(trNova, trAtual);

    trNova.appendChild(contParcela);
    trNova1.appendChild(contParcela1);
    trNova2.appendChild(contParcela2);
    trNova3.appendChild(contParcela3);

    $tr.appendChild(trNova)
    $tr.appendChild(trNova1)
    $tr.appendChild(trNova2)
    $tr.appendChild(trNova3)


    document.body.insertBefore($tr, trAtual);
    
    i++
    //valorfinanc--

 }
 function criarpsar(){
  
}