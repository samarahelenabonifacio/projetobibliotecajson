window.onload = function(){
    let form = document.getElementById("entrar");
    let login = document.getElementById("usuario");
    let senha = document.getElementById("senha");
    
    const pag1 = document.querySelector("#pag1"); 
    const pag2 = document.getElementById("pag2"); 
    const pag3 = document.querySelector("#pag3"); 
    const pag4 = document.querySelector("#pag4"); 
    const pag5 = document.querySelector("#pag5"); 

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
                window.location.replace("menu.html");
            }
        })
        });
    });
}