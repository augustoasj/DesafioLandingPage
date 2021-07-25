let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    //console.log(nome, email, telefone)

    /*Armazenando dados no LocalStorage*/
    let dados = {
        nome, email, telefone
    }
    let converterDados = JSON.stringify(dados)
    localStorage.setItem('lead', converterDados)

    //criando loading
    let conteudo = document.getElementById('conteudo')

    let cadastrando = `<h2> Cadastrando </h2>`
    let concluido = `<h2> Cadastro Concluido </h2> <p> Eu já te ligo, jóia?</p>`
    conteudo.innerHTML = cadastrando

    setTimeout(() => {
        conteudo.innerHTML = concluido
    }, 1000)

})
