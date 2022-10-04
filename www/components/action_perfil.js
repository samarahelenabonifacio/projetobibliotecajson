window.onload = function(){
    let usuario = JSON.parse(localStorage.usuario);
    let perfil = document.getElementById('perfil');
    let dados = '<img src="'+usuario.perfil+'">';
    perfil.innerHTML = dados;

    let voltar = document.getElementById('voltar');

    voltar.addEventListener('click', function(){
        window.location.replace('menu.html');
    });

    let sair = document.getElementById('sair');

    sair.addEventListener('click', function(){
        localStorage.removeItem('usuario');
        window.location.replace('index.html');
    });
    
    var url = "https://oscorvosdeodin.profrodolfo.com.br/usuario.php";

    fetch(url)
    .then(resposta=> {
        return resposta.json();
    })
    .then(function (json){
        var d = document.querySelector('.perfil');
        var texto = '';
        for(i = 0; i < json.length; i++){
            texto += '<div class="row mt-3">';
            texto += '<div class="col text-light fonte">';
            texto += '<div class="col"><h3>RM: '+json[i].rm+'</h3>';
            texto += '</div>';
            texto += '<div class="col"><h3>Nome: '+json[i].nome+'</h3>';
            texto += '</div>';
            texto += '<div class="col"><h3>E-mail: '+json[i].email+'</h3>';
            texto += '</div>';
            texto += '<div class="col"><h3>Senha: '+json[i].senha+'</h3>';
            texto += '</div>';
            texto += '<div class="col"><h3>Data de Nascimento: '+json[i].dt_nascimento+'</h3>';
            texto += '</div>';
            texto += '<div class="col"><h3>Telefone: '+json[i].telefone+'</h3>';
            texto += '</div>';
            texto += '</div>';
            texto += '</div>';
        }
        d.innerHTML += texto;
    }).catch();

}