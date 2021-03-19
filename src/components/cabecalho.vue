<template>
    <div class="botoes">
        <div > 
            <h1 class="titulo">
                <span>Tabela de calculos</span>
            </h1>
        </div> 
        <button class="bt bt-vd">
            <a href="../FNO/relatorio.html" >RELATÓRIO</a>
        </button>
        <button class="bt bt-vd">
            <a href="../FNO/core.html" >CORES</a>
        </button>
        <button class="bt bt-vd">
            <a href="../FNO/index.html" >INDEX</a>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

h1{
    text-align: center;
    top: 0px;
    background-color: #33cc6e67;
    width: auto;
    position: relative ;
    margin: auto;
    height:50px
    
}

button{
    top: -35px;
    position: relative;
    left: 5px;
    margin: 2px;
}

.cor{
    background-color: #f2f4f8;
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
.bt {
    border:1px solid #25692A;
    border-radius:4px;
    display:inline-block;
    cursor:pointer;
    font-family:Verdana;
    font-weight:bold;
    font-size:13px;
    padding:6px 10px;
    text-decoration:none;
    } 
    
    .bt-vd {
    border-color:#68b465;
    background:linear-gradient(to bottom, #abd5aa 5%, #68b465 100%);
    box-shadow:inset 0px 1px 0px 0px #e3f1e3;
    color:#fff;
    text-shadow:0px 1px 0px #528009;
    }
    
    .bt-vm {
    border-color:blue;
    background:linear-gradient(to bottom, #fca8a1 5%, blue 100%);
    box-shadow:inset 0px 1px 0px 0px #fff4f3;
    color:#fff;
    text-shadow:0px 1px 0px #528009; 
    }
    
    .bt-vd:hover {
    background:linear-gradient(to bottom, #68b465 5%, #abd5aa 100%);
    }
    
    .bt-vm:hover {
    background:linear-gradient(to bottom, blue 5%, #fca8a1 100%);
    }

    
    /* formatação dos botões FIM*/
     
</style>