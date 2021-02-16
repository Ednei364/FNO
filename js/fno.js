var button = document.querySelector('[data-js="incluir"]')
var erro = document.querySelector('[data-js="erro"]')
var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
var numeroDeParc = document.querySelector('[data-js="totalparc"]')
var taxa = document.querySelector('[data-js="taxa"]')
var sdf = document.querySelector('[data-js="tr"]')

//var parcela = parseFloat(numeroDeParc.value)
var valor =valorfinanc.value
//var valorparc = parseFloat(valorfinanc.value) /parseFloat(numeroDeParc.value)
var i = 1
var paras;
//var $tr = document.querySelector('[data-js="tr"]')
// limite de caracteres
valorfinanc.onkeyup =  function limiteFinanc(){
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

    

}
numeroDeParc.onkeyup=  function limiteFinanc(){
    var valor = numeroDeParc.value;
    valor = valor + ''
    valor= parseInt(valor.replace(/\D+/g, ''))
    valor = valor + '';
    if(valor == 'NaN') numeroDeParc.value = '';
}
taxa.onkeyup=   function limiteFinanc(){

    var valor = taxa.value;
    valor = valor + ''
    valor= parseInt(valor.replace(/\D+/g, ''))
    valor = valor + '';
    if(valor == 'NaN') taxa.value = '';
}


//gerar contrato

button.onclick=  function(){  
    var fin1 = parseFloat(((valorfinanc.value).replace(/\./gi,'')).replace(/,/,'.')) 
    var valorparc = fin1 /parseFloat(numeroDeParc.value) 
    var parcela = parseFloat(numeroDeParc.value)
    var taxa1 = parseFloat(taxa.value)
    if( numeroDeParc.value>420){
        erro.innerHTML="Numero de parcelas acima do permitido"
    }else if(isNaN(fin1)||fin1<0.001 ){
            erro.innerHTML="valor não informado"
        }else if(isNaN(parcela)||parcela<1){
            erro.innerHTML="Parcela não informada"
        }else if(isNaN(taxa1)||taxa1<0.0000005) {
            erro.innerHTML="Taxa não informada"
        }else{        
        if(paras>0){
            console.log(`sss ${paras}`)
            //alert("Existre uma simulação de Fno já lançado, a pagina será recarregada")
            window.location.reload()
            
        }else{
            for(var i=0; i < parseFloat(numeroDeParc.value);i++ ){
                erro.innerHTML=""
                   criarpar()
               }
            criarpsar() 
        }
        paras=1  
    }     
    }
    


 function criarpar(){
    var fin = parseFloat(((valorfinanc.value).replace(/\./gi,'')).replace(/,/,'.'))
    //console.log(fin)
    var Amort = fin /parseFloat(numeroDeParc.value)
    var saldo = fin+Amort-(Amort*i)
    var taxa1 =(saldo * parseFloat(taxa.value)/100)
    var parc =Amort+taxa1
    var valor3=',$1'
    var valor1 =function valor1(){
        if(Amort>999999.99){            
            valor3='.$1.$2,$3'
            return /([0-9]{3})([0-9]{3}).([0-9]{2}$)/g
        }
        if(Amort>999.99){
            valor3='.$1,$2'
            return /([0-9]{3}).([0-9]{2}$)/g
        }
        return /.([0-9]{2})$/g
    }   
    var tt = Amort.length
    var valor2=valor1()
    
    console.log(`${valor2} sf +${i}`)
    console.log(`${tt} `)
    

    
    
    //var $fragment = document.createDocumentFragment();
    var $tr = document.createElement('tr');

    var trNova = document.createElement("td"); //node
    var contParcela = document.createTextNode(`${i}ª`);

    var trNova1 = document.createElement("td");//node
    var contParcela1 = document.createTextNode(`${Amort.toFixed(2).replace(valor2,valor3)}`);

    var trNova2 = document.createElement("td");//node
    var contParcela2 = document.createTextNode(`R$ ${taxa1.toFixed(2)}`);
    
    var trNova3 = document.createElement("td");//node
    var contParcela3 = document.createTextNode(`R$ ${parc.toFixed(2)}`);
    
    var trNova4 = document.createElement("td");//node
    var contParcela4 = document.createTextNode(`R$ ${saldo.toFixed(2)}`);



    var trAtual = document.getElementById("div1");
   // var trAtual = document.getElementById("div21");
    
    //document.body.insertBefore(trNova, trAtual);

    trNova.appendChild(contParcela);
    trNova1.appendChild(contParcela1);
    trNova2.appendChild(contParcela2);
    trNova3.appendChild(contParcela3);
    trNova4.appendChild(contParcela4);

    $tr.appendChild(trNova)
    $tr.appendChild(trNova1)
    $tr.appendChild(trNova2)
    $tr.appendChild(trNova3)
    $tr.appendChild(trNova4)


    sdf.insertBefore($tr, trAtual);
    
    i++
    //valorfinanc--

 }
 function criarpsar(){
    taxa.value =`${taxa.value}%`
}
  
