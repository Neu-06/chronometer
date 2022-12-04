window.onload = init;
function init (){
    document.querySelector(".stop").addEventListener("click", detener);
    document.querySelector(".star").addEventListener("click", iniciar);
    document.querySelector(".reset").addEventListener("click", reiniciar);
    hora= 0;
    minuto=0;
    segundo=0;
    milisegundos=0;
    document.getElementById("cronometro").innerHTML="00:00:00";
    document.getElementById("msg").innerHTML="00";

}
function iniciar () {
   tiempo();
   time = setInterval(tiempo,10);
   document.querySelector(".star").removeEventListener("click",iniciar); 
   document.querySelector(".stop").addEventListener("click",detener); 
} 
function tiempo (){
    var h,m,s,ms;
    milisegundos++;
    if (milisegundos > 99){segundo++; milisegundos=0;}
    if (segundo > 59 ){minuto++; segundo=0;}
    if (minuto > 59 ){hora++; minuto=0;}
    if (hora > 24 ){hora=0;}

    if(milisegundos < 10){ms="0"+milisegundos;} else{ms=milisegundos}
    if (segundo < 10){s="0"+segundo;} else{s=segundo;}
    if (minuto < 10){m="0"+minuto;} else{m=minuto;}
    if (hora < 10){h ="0"+hora;} else{h=hora;}
    document.getElementById("cronometro").innerHTML= h+":"+m+":"+s;
    document.getElementById("msg").innerHTML= ms;
}
function detener (){
    clearInterval(time);
    document.querySelector(".star").addEventListener("click", iniciar);
    document.querySelector(".stop").removeEventListener("click", detener);
    document.getElementById("continue").innerHTML="continuar"

}
function reiniciar (){
    clearInterval(time);
    document.getElementById("cronometro").innerHTML="00:00:00";
    document.getElementById("msg").innerHTML="00";
    hora=0; 
    minuto=0;
    segundo=0;
    milisegundos=0;
    document.querySelector(".star").addEventListener("click",iniciar);
    document.getElementById("continue").innerHTML="iniciar"
}