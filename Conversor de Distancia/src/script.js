function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKm = parseFloat(valor);

  var valorEmAnosLuz = valorEmKm / 9500000000000;
  console.log(valorEmAnosLuz);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A distância é " + valorEmAnosLuz;
  elementoValorConvertido.innerHTML = valorConvertido;
}