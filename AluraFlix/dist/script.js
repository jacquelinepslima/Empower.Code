var listaFilmes = [
  "https://media.fstatic.com/Xu8Jyghy5k-SigvLb4t4WRoLkHI=/290x478/smart/media/movies/covers/2021/09/1poZDh8kVEVHkDSFpuOT6xHdxdz.jpg",
  "https://teoriageek.com.br/wp-content/uploads/2021/02/FICHA-TECNICA-IMAGEM-min.png",
  "https://media.fstatic.com/ay5f5QOzQ3S4B83U7XmlUTutDgw=/210x312/smart/media/movies/covers/2020/12/B5OKq_4c.jpg",
  "https://br.web.img3.acsta.net/pictures/19/08/08/17/33/0750158.jpg",
  "https://br.web.img3.acsta.net/pictures/19/08/08/17/33/0750158.jpg"
];

//    valor inicial; condicao;   expressao final
for (var j = 0; j < listaFilmes.length; j++) {
  document.write("<img src=" + listaFilmes[j] + ">");

  var filmeNovo = [];
  listaFilmes.forEach((item) => {
    if (!filmeNovo.includes(item)) {
      filmeNovo.push(item);
    }
  });
  listaFilmes = filmeNovo;
}

// adicionando novos elementos - indice 3
//listaFilmes.push("Senhor dos Anéis - A Sociedade do Anel");

//Entar implementar outras versões da estrutura de repetição que fizemos com `for`, como por exemplo com `foreach` ou `while`
//var i = 0;
//while (i < listaFilmes.length) {
// i++;
//document.write("<img src=" + listaFilmes[i] + ">");
//}

//Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente - ok, mas pode ser assim também
//eliminar valores duplicados
//var filmeNovo = new Set(listaFilmes);
//listaFilmes = Array.from(filmeNovo);

//- Criar um campo e botão para adicionar a imagem pela tela, e não direto no código.
function adicionarFilme() {
  var urlImagemFilme = document.querySelector("input");
  var adicionarFilme = document.querySelector("button");
  var listaFilmes = [];

  listaFilmes.push(urlImagemFilme.value);
}

function removerFilme() {
  var filmeNovo = new Set(listaFilmes);
  listaFilmes = Array.from(filmeNovo);
}