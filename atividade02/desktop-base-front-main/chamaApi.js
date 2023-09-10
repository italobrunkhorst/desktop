const corpoTabelaPersonagens = document.getElementById('corpoTabelaPersonagens');

function testeApi() {
    axios.get('https://rickandmortyapi.com/api/character').then(response => {

        console.log(response);
        console.log(response.data);
        console.log(response.data.results);
        const personagens = response.data.results;
        preencherTabela(personagens)
    })
}

function preencherTabela(personagens) {
    personagens.forEach(function (personagem) {
        const linha = document.createElement('tr')

        const nomeCelula = document.createElement('td');
        nomeCelula.textContent = personagem.name;
        linha.appendChild(nomeCelula);

        corpoTabelaPersonagens.appendChild(linha);



    })
}
const botaoChamarAPI = document.getElementById('btChamaApi');

botaoChamarAPI.addEventListener('click', () => {

    testeApi();
    console.log('Fui clicado')
})