<template>
  <div class="result">  
        <table class="tabela" >
            <thead data-js="tr" >
                <tr class="cabecalho tabela" id="tt" >
                    <th>dias</th>
                    <th>taxa</th>
                    <th>Venc </th>
                    <th>Parc.</th>
                    <th>Amortiz.</th>
                    <th>Juros</th>
                    <th>Prestação</th>
                    <th>Saldo</th>
                </tr>
            </thead>
        </table>
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
    top: auto;
}

.tabela{
    top: 10px;
    background-color:#3ab8ad93;
    width: auto;
    position: relative;
    padding: auto;
    margin: auto;
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
</style>