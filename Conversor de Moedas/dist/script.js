function ConverterEmDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmDolar = (valorEmReal / 5.2).toFixed(2);
  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Dólar é $ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmEuro() {
  var valorElemento = document.getElementById("valor1");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmEuro = (valorEmReal / 5.6).toFixed(2);
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido1");
  var valorConvertido = "O resultado em Euro é " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmLibra() {
  var valorElemento = document.getElementById("valor2");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmLibra = (valorEmReal / 6.4).toFixed(2);
  console.log(valorEmLibra);

  var elementoValorConvertido = document.getElementById("valorConvertido2");
  var valorConvertido = "O resultado em Libra é " + valorEmLibra;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmBitcoin() {
  var valorElemento = document.getElementById("valor3");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmBitcoin = (valorEmReal * 0.0000081921).toFixed(2);
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido3");
  var valorConvertido = "O valor em Bitcoin é " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}