window.onload = function(){
    let usuario = JSON.parse(localStorage.usuario);
    let perfil = document.getElementById('perfil');
    let dados = '<img src="'+usuario.perfil+'">';
    perfil.innerHTML = dados;

    perfil.addEventListener('click', function(){
        window.location.replace('perfil.html');
    });

    const pag1 = document.getElementById("pag1");
    const pag2 = document.querySelector("#pag2"); 
    const pag3 = document.querySelector("#pag3"); 
    const pag4 = document.querySelector("#pag4"); 

    pag1.addEventListener('click', function(){
        window.location.replace("acervo.html");
    });
    pag2.addEventListener('click', function(){
        window.location.replace("rank.html");
    });
    pag3.addEventListener('click', function(){
        window.location.replace("fila.html");
    });
    pag4.addEventListener('click', function(){
        window.location.replace("sistem.html");
    });

}