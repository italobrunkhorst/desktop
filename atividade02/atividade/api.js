// Variável para armazenar a piada atual
let piadaAtual = "";

document.getElementById("gerarPiada").addEventListener("click", function() {
    // URL da API com a categoria "Miscellaneous"
    const apiUrl = "https://v2.jokeapi.dev/joke/Miscellaneous?lang=pt";

    // Esconde a imagem do cachorro ao gerar uma nova piada
    document.getElementById("cachorroReacao").style.display = "none";

    // Faz uma solicitação à API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verifica se a piada é de tipo "single" ou "twopart" e a exibe de acordo
            if (data.type === "single") {
                document.getElementById("piada").textContent = data.joke;
                piadaAtual = data.joke;
            } else {
                document.getElementById("piada").textContent = data.setup + " " + data.delivery;
                piadaAtual = data.setup + " " + data.delivery;
            }

            // Busca uma imagem de cachorro aleatória como reação à piada
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    const imagemCachorro = data.message;
                    document.getElementById("cachorroReacao").src = imagemCachorro;
                    document.getElementById("cachorroReacao").style.display = "block";
                });
        })
        .catch(error => {
            console.error("Erro ao obter piada:", error);
            document.getElementById("piada").textContent = "Não foi possível obter uma piada neste momento. Tente novamente mais tarde.";
        });
});