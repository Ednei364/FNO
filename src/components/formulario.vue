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
                <input type="text" id="valor" maxlength="15" value="1">
            </label>
            <label for="">
                <span>Quant.de parcelas</span>
                <input type="text" id="parc" maxlength="3" value="202">
            </label>
            <label for="">
                <span>Taxa do contrato</span>
                <input type="text" id="taxa" maxlength="3"  value="2">
            </label>
            <label for="">
                <span>Data da primeira parcela</span>
                <input type="date" id="date" value="2020-11-18">
            </label>
            <button id="contrato" class="bt bt-vm">Gerar contrato</button>
        </div>
            <hr>
    </div>
</template>

<script>
export default {
    data(){
        return{
            i: 1,
            paras,
            $tr:document.createElement('tr'),
            dyas:'',
            dataPag:newdata.value,
            NovaData:new Date(dataPag),
            dyas2:'',   
            taxamem:'',
            fin:'',
            Amort:'',
            saldo:'',
            parc:'',
            taxa1:'',
            taxaDoMes1:'',

        }
    },
    methods:{

    }

}
</script>

<style>


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