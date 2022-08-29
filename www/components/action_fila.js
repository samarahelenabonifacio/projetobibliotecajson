window.onload = function(){
    const filaanterior = document.querySelector("#filaanterior");
    const filamenu = document.querySelector("#filamenu");
    const filaproximo = document.querySelector("#filaproximo");

    filaanterior.addEventListener('click', function(){
        window.location.replace("rank.html");
    });
    filamenu.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
    filaproximo.addEventListener('click', function(){
        window.location.replace("sistem.html");
    });
}