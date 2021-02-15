var button = document.querySelector('[data-js="incluir"]')
var erro = document.querySelector('[data-js="erro"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var taxa = document.querySelector('[data-js="taxa"]')
var parcela = parseFloat(numeroDeParc.value)
var valor =valorfinanc.value
var valorparc = parseFloat(valorfinanc.value) /parseFloat(numeroDeParc.value)
var i = 1
var paras;
//var $tr = document.querySelector('[data-js="tr"]')
// limite de caracteres
valorfinanc.onkeyup =  function limiteFinanc(){
    var valor = valorfinanc.value;
    valor = valor + ''
    valor= parseInt(valor.replace(/\D+/g, ''))
    valor = valor + '';
    if(valor == 'NaN') valorfinanc.value = '';
}
taxa.onkeyup=   function limiteFinanc(){
    var valor = valorfinanc.value;
    valor = valor + ''
    valor= parseInt(valor.replace(/\D+/g, ''))
    valor = valor + '';
    if(valor == 'NaN') valorfinanc.value = '';
}
parcela.onkeyup=  function limiteFinanc(){
    var valor = valorfinanc.value;
    valor = valor + ''
    valor= parseInt(valor.replace(/\D+/g, ''))
    valor = valor + '';
    if(valor == 'NaN') valorfinanc.value = '';
}

//gerar contrato

button.onclick=  function(){    
    if(isNaN(parseFloat(valorfinanc.value))||parseFloat(valorfinanc.value)<1 ){// ||parcela!=String|| taxa !=String){
        erro.innerHTML="valor não informado"
    }else if(isNaN(parseFloat(numeroDeParc.value))||parseFloat(numeroDeParc.value)<1){
        erro.innerHTML="Parcela não informada"
    }else if(isNaN(parseFloat(taxa.value))||parseFloat(taxa.value)<0.0000005) {
        erro.innerHTML="Taxa não informada"
    }else{
        
        if(paras>0){
            console.log(`sss ${paras}`)
            erro.innerHTML="Contrato já lançado, favor atualizar a página para nova simulação"
            
        }else{
            for(var i=0; i < parseFloat(numeroDeParc.value);i++ ){
                erro.innerHTML=""
                //   console.log(parseFloat(i))
                   criarpar()
                   
               }
            criarpsar() 
        }
        paras=1  
    }     
    }
    

 function criarpar(){
    var valorparc = parseFloat(valorfinanc.value) /parseFloat(numeroDeParc.value)
    var saldo = (parseFloat(valorfinanc.value)-(valorparc*i))
    var taxa1 =(saldo * parseFloat(taxa.value)/100)
    
    //var $fragment = document.createDocumentFragment();
    var $tr = document.createElement('tr');

    var trNova = document.createElement("td"); //node
    var contParcela = document.createTextNode(`${i}`);

    var trNova1 = document.createElement("td");//node
    var contParcela1 = document.createTextNode(`Amort. R$  ${valorparc.toFixed(2)}`);

    var trNova2 = document.createElement("td");//node
    var contParcela2 = document.createTextNode(`  Juros R$ ${taxa1.toFixed(2)}`);
    
    var trNova3 = document.createElement("td");//node
    var contParcela3 = document.createTextNode(`  Saldo R$ ${saldo.toFixed(2)}`);



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
    var valor = valorfinanc.value;
    valor = valor + ''
    valor= parseInt(valor.replace(/\D+/g, ''))
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
    
    if (valor.length > 9) {
        valor = valor.replace(/([0-9]{3})([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3 ");
    }
    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    valorfinanc.value = valor;
    if(valor == 'NaN') valorfinanc.value = '';

    taxa.value =`${taxa.value}%`
}
  
