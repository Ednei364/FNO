    (function(){
            'use strict'
            
        var button = document.querySelector('[data-js="incluir"]')
        var erro = document.querySelector('[data-js="erro"]')
        var valorfinanc = document.querySelector('[data-js="valorfinanc"]')
        var numeroDeParc = document.querySelector('[data-js="totalparc"]')
        var taxa = document.querySelector('[data-js="taxa"]')
        var sdf = document.querySelector('[data-js="tr"]')
        var newdata = document.querySelector('[data-js="newdata"]');


        ////////////////////////////////////////////////////////////////////
        //var valor =valorfinanc.value
        var i = 1
        var paras;
        var $tr = document.createElement('tr');
        var dyas;
        var dataPag = newdata.value
        var NovaData = new Date(dataPag)
        var dyas2;
        var taxamem;
        var fin;
        var Amort;
        var saldo;
        var parc;
        var taxa1;
        var taxaDoMes1;
        /////////////////////////////////////////////////////   

        newdata.onclick = function(){
            newdata.value=newdata.value
        }

        valorfinanc.onkeyup =  function limiteFinanc(){
            var valor = valorfinanc.value;
            valor = valor + ''
            valor= parseInt(valor.replace(/\D+/g, ''))
            valor = valor + '';
            valor = valor.replace(/([0-9]{2})$/g, ",$1");
            
            if (valor.length > 9){
                valor = valor.replace(/([0-9]{3})([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3 ");
            }else if (valor.length > 6){
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
            numeroDeParc.value>420?erro.innerHTML="Numero de parcelas acima do permitido":erro.innerHTML=""
        }

        taxa.onkeyup=   function limiteFinanc(){
            var valor = taxa.value;
            valor = valor + ''
            valor= parseInt(valor.replace(/\D+/g, ''))
            valor = valor + '';
            if(valor == 'NaN') taxa.value = '';
        }

        //gerar contrato
        button.addEventListener('click', function(e){

            var fin1 = parseFloat(((valorfinanc.value).replace(/\./gi,'')).replace(/,/,'.')) 
            var parcela = parseFloat(numeroDeParc.value)
            var taxa1 = parseFloat(taxa.value)
            if( numeroDeParc.value>420)
                erro.innerHTML="Numero de parcelas acima do permitido"
            if(!fin1)
                return erro.innerHTML="valor não informado"
            if(!parcela)
                return erro.innerHTML="Parcela não informada"
            if(!taxa1) 
                return erro.innerHTML="Taxa não informada"
            if(newdata.value==='') 
                return erro.innerHTML="Informe uma data"
            //if(paras>0)
            // return alert("Existre uma simulação de Fno já lançado, a pagina será recarregada"),window.location.reload()
            for(var i=0; i < parseFloat(numeroDeParc.value);i++ ){
                        erro.innerHTML=""
                        var trAtual = document.getElementById("div");
                        $tr = document.createElement('tr');
                        sdf.insertBefore($tr, trAtual);
                        
                        diasDaUltimaParcela()
                        taxaDoMesProporcional()
                        DataDoPagamento()
                        numeroDaParcela()
                        amortcal()
                        taxacal()
                        prestcal()                
                        saldocal()
            }
                    criarpsar() 
                    paras=1
        },false)        
                

        function diasDaUltimaParcela(){
            if(dyas2===undefined && dyas2 === undefined){
                taxamem=''
                }else{
                dyas>dyas2?taxamem=(dyas-dyas2)/1000/60/60/24:taxamem=(dyas2-dyas)/1000/60/60/24
            }
            var taxaDoMes = document.createElement("td");//node
            var noTaxaDoMes = document.createTextNode(`${taxamem}`);
            
            taxaDoMes.appendChild(noTaxaDoMes)
            $tr.appendChild(taxaDoMes)

        }

        function taxaDoMesProporcional(){
        //debugger;
        if(dyas2===undefined && dyas2 === undefined){
                taxaDoMes1=''
            }else{
            taxaDoMes1 = ((1+(parseFloat(taxa.value)/100))**(taxamem/360)-1).toFixed(5)
        }
            var taxaDoMes = document.createElement("td");//node
            var noTaxaDoMes = document.createTextNode(`${taxaDoMes1}`);

            taxaDoMes.appendChild(noTaxaDoMes)
            $tr.appendChild(taxaDoMes)
            
        }

        function DataDoPagamento(){
            function cal(n){
                if(n===0)
                    return 12
                return n<=9?`0${n}`:`${n}`;
            }
            
            function formatarDate(date){       
                var d = cal(date.getDate())
                var m= cal(date.getMonth())
                var a= cal(date.getFullYear())
                return `${d}-${m}-${a}`
            }
            var dd = NovaData.setMonth(NovaData.getMonth()+1)

            if(dyas2===undefined && dyas2 === undefined){
                dataLocal=''
            }else{
                var dataLocal=formatarDate(NovaData)
            }

            var trNova5 = document.createElement("td");//node
            var contParcela5 = document.createTextNode(`${dataLocal}`);
            trNova5.appendChild(contParcela5)
            $tr.appendChild(trNova5)

            if(i%2===0 ){
                dyas=dd
            }else{
                dyas2=dd
                }
        }
        function numeroDaParcela(){
            var pp;
            if(taxaDoMes1 === ''){
                pp=''
            }else{
                pp = `${i-1}ª`
            }

            var trNova = document.createElement("td"); //node
            var contParcela = document.createTextNode(`${pp}`);
            trNova.appendChild(contParcela);
            $tr.appendChild(trNova)
        }
        function amortcal(){
            fin = parseFloat(((valorfinanc.value).replace(/\./gi,'')).replace(/,/,'.'))
            Amort = fin /parseFloat(numeroDeParc.value)
            saldo = fin-(Amort*i)
            taxa1 =((saldo+Amort) * parseFloat(taxa.value)/100)
            parc =Amort+taxa1
            var Amortvalor3=',$1'
            var Amortvalor1 =function valor1(){
                if(Amort>999999.99){            
                    Amortvalor3='.$1.$2,$3'
                    return /([0-9]{3})([0-9]{3}).([0-9]{2}$)/g
                }
                if(Amort>999.99){
                    Amortvalor3='.$1,$2'
                    return /([0-9]{3}).([0-9]{2}$)/g
                }
                return /.([0-9]{2})$/g
            }   
            var Amortvalor2=Amortvalor1()
            var trNova1 = document.createElement("td");//node
            var contParcela1 = document.createTextNode(`${Amort.toFixed(2).replace(Amortvalor2,Amortvalor3)}`);
            trNova1.appendChild(contParcela1);
            $tr.appendChild(trNova1)
        }

        function taxacal(){
            fin = parseFloat(((valorfinanc.value).replace(/\./gi,'')).replace(/,/,'.'))
            Amort = fin /parseFloat(numeroDeParc.value)
            saldo = fin-(Amort*i)
            // taxa1 =((saldo+Amort) * parseFloat(taxa.value)/100)
            taxa1 =((saldo+Amort) * taxaDoMes1)

            parc =Amort+taxa1
            var taxa1valor3=',$1'
            var taxa1valor1 =function valor1(){
                if(taxa1>999999.99){            
                    taxa1valor3='.$1.$2,$3'
                    return /([0-9]{3})([0-9]{3}).([0-9]{2}$)/g
                }
                if(taxa1>999.99){
                    taxa1valor3='.$1,$2'
                    return /([0-9]{3}).([0-9]{2}$)/g
                }
                return /.([0-9]{2})$/g
            }   
            var taxa1valor2=taxa1valor1()
            var trNova2 = document.createElement("td");//node
            var contParcela2 = document.createTextNode(`${taxa1.toFixed(2).replace(taxa1valor2,taxa1valor3)}`);
            trNova2.appendChild(contParcela2);
            $tr.appendChild(trNova2)
        }

        function prestcal(){
            fin = parseFloat(((valorfinanc.value).replace(/\./gi,'')).replace(/,/,'.'))
            Amort = fin /parseFloat(numeroDeParc.value)
            saldo = fin-(Amort*i)
            taxa1 =((saldo+Amort) * taxaDoMes1)
            parc =Amort+taxa1
            var parcvalor3=',$1'
            var parcvalor1 =function valor1(){
                if(parc>999999.99){            
                    parcvalor3='.$1.$2,$3'
                    return /([0-9]{3})([0-9]{3}).([0-9]{2}$)/g
                }
                if(parc>999.99){
                    parcvalor3='.$1,$2'
                    return /([0-9]{3}).([0-9]{2}$)/g
                }
                    return /.([0-9]{2})$/g
                }   
            var parcvalor2=parcvalor1()
            var trNova3 = document.createElement("td");//node
            var contParcela3 = document.createTextNode(`${parc.toFixed(2).replace(parcvalor2,parcvalor3)}`);
            trNova3.appendChild(contParcela3);
            $tr.appendChild(trNova3)
        }

        function saldocal(){
            var saldovalor3=',$1'
            var saldovalor1 =function valor1(){
                if(saldo>999999.99){            
                    saldovalor3='.$1.$2,$3'
                    return /([0-9]{3})([0-9]{3}).([0-9]{2}$)/g
                }
                if(saldo>999.99){
                    saldovalor3='.$1,$2'
                    return /([0-9]{3}).([0-9]{2}$)/g
                }
                return /.([0-9]{2})$/g
            }   
            var saldovalor2=saldovalor1()  
            var trNova4 = document.createElement("td");//node
            var contParcela4 = document.createTextNode(`${saldo.toFixed(2).replace(saldovalor2,saldovalor3)}`);
            trNova4.appendChild(contParcela4);
            $tr.appendChild(trNova4)
            i++
        }

        function criarpsar(){
            taxa.value =`${taxa.value}%`
        }
        
    })()