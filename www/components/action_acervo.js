window.onload = function(){
    let usuario = JSON.parse(localStorage.usuario);
    let perfil = document.getElementById('perfil');
    let dados = '<img src="'+usuario.perfil+'">';
    perfil.innerHTML = dados;

    perfil.addEventListener('click', function(){
        window.location.replace('perfil.html');
    });
    
    var url = "https://oscorvosdeodin.profrodolfo.com.br/livro.php";

    fetch(url)
    .then(resposta=> {
        return resposta.json();
    })
    .then(function (json){
        var d = document.querySelector('.acervo');
        var texto = '';
        for(i = 0; i < json.length; i++){
            // console.log(json[i]);
            texto += '<div class="row">';
            texto += '<div class="col-5 text-light fonte">';
            texto += '<img class="img-fluid" src="https://oscorvosdeodin.profrodolfo.com.br/imgs/'+json[i].cd+"/"+json[i].capa+'">';
            texto += '</div>';
            texto += '<div class="col-7 text-light fonte">';
            texto += '<h1>'+json[i].titulo+'</h1>';
            texto += '<h3>'+json[i].isbn+'</h3>';
            // texto += '<h3>'+json[i].id_genero.nome+'</h3>';
            texto += '</div>';
            texto += '</div>';
            texto += '<br>';
        }
        d.innerHTML += texto;
    }).catch();

    const pag1 = document.querySelector("#pag1");
    const pag2 = document.querySelector("#pag2"); 
    const pag3 = document.querySelector("#pag3"); 
    const pag4 = document.querySelector("#pag4"); 

    pag1.addEventListener('click', function(){
        window.location.replace("menu.html");
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