window.onload = function(){
    const rankanterior = document.querySelector("#rankanterior");
    const rankmenu = document.querySelector("#rankmenu");
    const rankproximo = document.querySelector("#rankproximo");

    rankanterior.addEventListener('click', function(){
        window.location.replace("acervo.html");
    });
    rankmenu.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
    rankproximo.addEventListener('click', function(){
        window.location.replace("fila.html");
    });
}