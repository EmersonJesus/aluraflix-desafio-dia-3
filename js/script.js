var nomeFilmes = ["Evil Dead II", "Spider-man 2", "Star Wars: Episode III - Revenge of the Sith", "Get Out"];
var posterFilmes = [
  "https://static.wikia.nocookie.net/evildead/images/5/55/Evil-dead-2.jpeg",
  "https://i.pinimg.com/originals/e8/31/fd/e831fd4042b3be42dd7255d9f7fdc234.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"
];

function adicionarFilme() {
  // Lógica para adicionar filme
  var nomeInput = document.getElementById("nome");
  var urlInput = document.getElementById("url");

  var nome = nomeInput.value;
  var url = urlInput.value;

  if (nome && url) {
    nomeFilmes.push(nome);
    posterFilmes.push(url);
    atualizarFilmes();
    // Limpa os campos de entrada
    nomeInput.value = "";
    urlInput.value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function atualizarFilmes() {
  var containerTodosFilmes = document.getElementById("containerTodosFilmes");
  if (containerTodosFilmes) {
    containerTodosFilmes.innerHTML = "";

    for (var i = 0; i < posterFilmes.length; i++) {
      if (posterFilmes[i].endsWith("jpg") || posterFilmes[i].endsWith("jpeg")) {
        var filmeDiv = document.createElement("div");
        filmeDiv.className = "container_filme";

        var imagem = document.createElement("img");
        imagem.src = posterFilmes[i];

        var paragrafo = document.createElement("p");
        paragrafo.textContent = nomeFilmes[i];

        filmeDiv.appendChild(imagem);
        filmeDiv.appendChild(paragrafo);

        containerTodosFilmes.appendChild(filmeDiv);
      } else {
        console.log(
          "A imagem " +
            i +
            " não foi lida, pois não é um arquivo do tipo jpeg ou jpg."
        );
      }
    }
  } else {
    console.error("O elemento containerTodosFilmes não foi encontrado.");
  }
}

// Inicializa a lista de filmes
atualizarFilmes();
