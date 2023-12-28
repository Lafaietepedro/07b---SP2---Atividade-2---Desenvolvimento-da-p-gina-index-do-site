function login() {
    var logado = 0;
    var usuario = document.getElementById("login").value;
    var senha = document.getElementById("password").value;

    if (usuario == 'admin' && senha == '123456') {
        window.location.href = "index.html";
        logado = 1;
    }

    if (logado == 0) {
        alert("Acesso Negado. Dados Incorretos.");
    }
}

function cadastro () {
    alert ("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
}