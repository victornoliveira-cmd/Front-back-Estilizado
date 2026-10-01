//Função que envia os dados para o servidor JSON SERVER
//POST - CREATE

function enviardados() {
    //Obter os valores do input
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    //Enviar os dados para o servidor utilizando o FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', //Método HTTP ultilizando POST
        heanders: {
            'Content-TYpe': 'application/json' //Tipo de contéudo enviado JSON

        },
        body: JSON.stringify({nome: nome, senha: senha}) // Dados a serem enviados para o JSON
    }).then(resposta => resposta.json())// Converte a resposta para o JSON

}
