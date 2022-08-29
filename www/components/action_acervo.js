window.onload = function(){
    var url = "http://profrodolfo.com.br/biblioteca/livro.php"

    fetch(url)
    .then(resposta=> {
        return resposta.json();
    })
    .then(function (json){
        var d = document.querySelector('.dados');
        var texto = '';
        for(i = 0; i < json.length; i++){
            texto += '<div class="row">';
            texto += '<div class="col-5">';
            texto += '<img class="img-fluid" src="https://profrodolfo.com.br/biblioteca/livro.php'+json[i].foto+'">';
            texto += '</div>';
            texto += '<div class="col-7">';
            texto += '<h1>'+json[i].nome+'</h1>';
            texto += '<h3>'+json[i].valor+'</h3>';
            texto += '</div>';
            texto += '</div>';
            texto += '<br>';
        }
        d.innerHTML += texto;
    }).catch();

    const acervoanterior = document.querySelector("#acervoanterior");
    const acervomenu = document.querySelector("#acervomenu");
    const acervoproximo = document.querySelector("#acervoproximo");

    acervoanterior.addEventListener('click', function(){
        window.location.replace("filter.html");
    });
    acervomenu.addEventListener('click', function(){
      window.location.replace("menu.html");
    });
    acervoproximo.addEventListener('click', function(){
        window.location.replace("rank.html");
    });
}