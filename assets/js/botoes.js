let botao = document.getElementsByClassName("botao-fake");
function botaoClicado (){
    alert("Em desevolvimento");
};
for( i = 0; i < botao.length; i++){
    botao[i].addEventListener("click", botaoClicado);
};