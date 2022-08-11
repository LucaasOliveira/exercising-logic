let num1 = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));

if (num1 == num2) {
  document.write(`Os números ${num1} e ${num2} são iguais.`);
} else if (num1 > num2) {
  document.write(`${num1} é maior que ${num2}.`);
} else {
  document.write(`${num2} é maior que ${num1}`);
}
