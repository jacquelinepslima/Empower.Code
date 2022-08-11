function ConverterFahrenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsius = parseFloat(valor);

  var valorEmFahrenheit = ((valorEmCelsius * 1.8) + 32).toFixed(1);
  console.log(valorEmFahrenheit);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A temperatura em Fahrenheit é " + valorEmFahrenheit;
  elementoValorConvertido.innerHTML = valorEmFahrenheit;
}

function ConverterKelvin() {
  var valorElemento = document.getElementById("valor1");
  var valor = valorElemento.value;
  var valorEmCelsius = parseFloat(valor);

  var valorEmKelvin = (valorEmCelsius + 273).toFixed(1);
  console.log(valorEmKelvin);

  var elementoValorConvertido = document.getElementById("valorConvertido1");
  var valorConvertido = "A temperatura em Kelvin é " + valorEmKelvin;
  elementoValorConvertido.innerHTML = valorEmKelvin;
}
