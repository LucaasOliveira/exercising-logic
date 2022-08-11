//let height = prompt("Informe a sua altura em metros: ");
let height = 1.91;
document.write(`Altura: ${height}m <br>`);

//let weight = prompt("Informe o seu peso: ");
let weight = 93;
document.write(`Peso: ${weight}kg <br>`);

let imc = weight / (height * height);

if (imc < 18.5) {
  document.write("Você está abaixo da faixa de peso ideal");
} else if (imc >= 18.5 && imc <= 24.99) {
  document.write("Você está dentro da faixa de peso ideal");
} else {
  document.write("Você está acima da faixa de peso ideal");
}
