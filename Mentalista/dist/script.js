var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  if (tentativa < 3) {
    tentativa++;
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou!";
    } else if (chute < 0 || chute > 10) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou. O seu chute é maior que o número secreto";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou. O seu chute é menor que o número secreto";
    }
  } else {
    elementoResultado.innerHTML = "Você não pode jogar mais";
  }
}