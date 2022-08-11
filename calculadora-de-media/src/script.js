var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var valor3 = document.getElementById("valor3");
var valor4 = document.getElementById("valor4");

function CalcularMedia() {
  
  var notaPrimeiroBimestre = valor1.value;
  var notaSegundoBimestre = valor2.value;
  var notaTerceiroBimestre = valor3.value;
  var notaQuartoBimestre = valor4.value;
  
  var nota1 = parseFloat(notaPrimeiroBimestre);
  var nota2 = parseFloat(notaSegundoBimestre);
  var nota3 = parseFloat(notaTerceiroBimestre);
  var nota4 = parseFloat(notaQuartoBimestre);
  

  var mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  console.log(mediaFinal);

  var valorMediaFinal = document.getElementById("valorMediaFinal");
  
if (mediaFinal < 5.5) {
valorMediaFinal.innerHTML = "Sua média final é " + mediaFinal + ", você foi reprovada(o) :/";
} else {
valorMediaFinal.innerHTML = "Sua média final é " + mediaFinal + ", você foi aprovada(o) :)";
  }
}





//  revi~sao
// variáveis - são lugares na memória do computador que utilizamos para referenciar valores
// strings - palavras que colocamos no código usando as aspas
// console.log - imprimir no console
// toFixed - para fixar as casas decimais das notas
// operações matemáticas - soma, divisão, multiplicação e subtração
// concatenação - juntas duas coisas, string + number
// desafio - dividir as etapas (ok), dependendo da nota colocar se foi aprovado ou não (ok), estilizar o fundo da imagem (ok), escrever na página o que estamos escrevendo no console, fazer um calculo para converter a temperatura (celsius pra Fhranheit), distancia, moeda