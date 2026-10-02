
function irParaLogin() {
    window.location.href = "login.html";
}


function entrar() {

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == "admin" && senha == "1234") {

        window.location.href = "bemvindo.html";

    } else {

        document.getElementById("mensagem").innerHTML =
            "Usuário ou senha incorretos!";
    }
}


function voltar() {
    window.location.href = "index.html";
}


function sair() {
    window.location.href = "login.html";
}

