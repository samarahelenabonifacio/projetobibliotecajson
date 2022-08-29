window.onload = function(){
    const pag1 = document.querySelector("#pag1"); 
    const pag2 = document.getElementById("pag2"); 
    const pag3 = document.querySelector("#pag3"); 
    const pag4 = document.querySelector("#pag4"); 
    const pag5 = document.querySelector("#pag5"); 

    pag1.addEventListener('click', function(){
        window.location.replace("filter.html");
    });
    pag2.addEventListener('click', function(){
        window.location.replace("acervo.html");
    });
    pag3.addEventListener('click', function(){
        window.location.replace("rank.html");
    });
    pag4.addEventListener('click', function(){
        window.location.replace("fila.html");
    });
    pag5.addEventListener('click', function(){
        window.location.replace("sistem.html");
    });
}