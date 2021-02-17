
var newdata = document.querySelector('[data-js="newdata"]');


noww= new Date
newdata.value= "1121-02-01"

IncluirDiv.onclick =function naem(){
var nnd =newdata.value
newFrase.value =nnd.replace(/(\d{4})-(\d{2})-(\d{2})/g,'$3-$2-$1')
var diad = newFrase.value[3]==='0'?newFrase.value[4]:newFrase.value[3]+newFrase.value[4]
var dia =newFrase.value[0]+newFrase.value[1]
var mes1 =diad
var ano=newFrase.value[6]+newFrase.value[7]+newFrase.value[8]+newFrase.value[9]


if(mes1>12){
	mes1=1
	ano= parseInt(ano)+1
console.log(mes1)
}
var vv = ed()
function ed(){
if(mes1<10){
vv='0'+mes1
}else{ 
vv=mes1
}
var data1 = dia+'-'+vv+'-'+ ano

  var divNova = document.createElement("h3");
  var conteudoNovo = document.createTextNode(data1)

  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  document.body.insertBefore(divNova, tDiv);

mes1++
}
