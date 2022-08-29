window.onload = function(){
    const filteranterior = document.querySelector("#filteranterior");
    const filtermenu = document.querySelector("#filtermenu");
    const filterproximo = document.querySelector("#filterproximo");

    filteranterior.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
    filtermenu.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
    filterproximo.addEventListener('click', function(){
        window.location.replace("acervo.html");
    });
}