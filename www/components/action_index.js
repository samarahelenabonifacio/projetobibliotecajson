window.onload = function(){
    const semfoto = '<img src="imgs/semfoto.png">';
    foto.innerHTML = semfoto;

    let form = document.getElementById("entrar");
    let login = document.getElementById("usuario");
    let senha = document.getElementById("senha");

    form.addEventListener("click", function(){
        let formData = new FormData();
        formData.append('login', `${login.value}`);
        formData.append('senha', `${senha.value}`);

        fetch("https://oscorvosdeodin.profrodolfo.com.br/usuario.php", 
            {
                body: formData, 
                method: "post",
                mode: 'cors',
                cache: 'default'
        })  .then(response => {response.json()
        .then(data => {
            if(data.erro){
                alert("Usuário e/ou senha inválido!");
            }else{
                //alert(data.dados.nome);
                localStorage.setItem('usuario', JSON.stringify(data.dados));
                window.location.replace("menu.html");
            }
        })
        });
    });

    Verifica();

    function Verifica(){
        let user = localStorage.usuario;
        if(user){
            window.location.replace("menu.html");
        }
    }
}