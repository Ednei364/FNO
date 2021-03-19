<template>
    <div>
        <div id="fno">
            <label for="">
                <span>Empresa</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Nº do Contrato</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Modelo</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Data do Crédito</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Base</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Carencia</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Bonus</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>IPCA/SAC</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Amotização período</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Juros período</span>
                <input type="text" value="Não esta configurado :/">
            </label>
            <label for="">
                <span>Valor do contrato</span>
                <input type="text" id="valor" data-js="valorfinanc" maxlength="15" value="1">
            </label>
            <label for="">
                <span>Quant.de parcelas</span>
                <input type="text" id="parc" data-js="totalparc" maxlength="3" value="202">
            </label>
            <label for="">
                <span>Taxa do contrato</span>
                <input type="text" id="taxa" data-js="taxa" maxlength="3"  value="2">
            </label>
            <label for="">
                <span>Data da primeira parcela</span>
                <input type="date" id="date" data-js="newdata" value="2020-11-18">
            </label>
            <button id="contrato" class="bt bt-vm" data-js="incluir">Gerar contrato</button>
        </div>
            <hr>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.result{
  
z-index: 1;


    
    position: relative;
    padding: auto;
    top: 460px;
}

.cor{
    background-color: #f2f4f8;
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
.cabecalho-tabela{

    position: fixed;


}

tr{

    border-width:2px;
    border-style: ridge;
    border-color: black;
   width: auto;
   position: relative;
   padding: auto;
   margin: auto;
}

th{
    border-width:2px;
    border-style: ridge;
    border-color: black;
    width: 85px;
}

td{
    border: 1px solid rgba(5, 5, 5, 0.705);
}















#fno{
    top: -20px;
    position: relative;
    background-color:#1ab8ad99;
    width: 700px;
    margin: auto;
    padding-top: 20pt;
    padding-left: 20pt;
    padding-bottom: 30pt;
    box-shadow: 5px 10px 35px 1px;
}
input{
    background-color: rgb(228, 245, 242);
    color: red;
    margin-top: 5px;

}

button#contrato{
    top: 30px;
    margin: auto;
    position: relative;


}
</style>