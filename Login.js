//Função que envia os dados para o servidor JSON SERVER
//POST - CREATE

function fazerLogin() {
    //Obter os valores do input
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json()).then(dados => {
        //buscar o usuário e senha que foram difitados e existentes no JSON - find
        let usuário = dados.find(pessoas => pessoas.nome == nome &pessoas.senha == senha)
        //Se existir a pessoa, redirecionar para a pagína BEM-VINDO.html
        if(usuário) {
            window.location.href = "Bemvindo.html"
        } else {
            alert("Usuário/Senha Incorretos! Tente Novamente")
        }
        
    })
}