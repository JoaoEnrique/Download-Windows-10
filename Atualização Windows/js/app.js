var contador=0;
var tempo=setInterval(timer, 14800); //Tempo da porcentagem

function timer()
{
  contador=contador+1;

 document.getElementById("timer").innerHTML=contador +'%';
}