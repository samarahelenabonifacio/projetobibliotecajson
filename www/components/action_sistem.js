window.onload = function(){
    const sistemanterior = document.querySelector("#sistemanterior");
    const sistemmenu = document.querySelector("#sistemmenu");
    const sistemproximo = document.querySelector("#sistemproximo");

    sistemanterior.addEventListener('click', function(){
        window.location.replace("fila.html");
    });
    sistemmenu.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
    sistemproximo.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
}