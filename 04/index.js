const num1 = Number(prompt("Digite um número: "));
const num2 = Number(prompt("Digite um número: "));
const operation = String(prompt("Escolha uma operação matemática: + - * ou /"));

if (operation == "-") {
  let result = num1 - num2;
  document.write(`${num1} - ${num2} = ${result}`);
} else if (operation == "+") {
  result = num1 + num2;
  document.write(`${num1} + ${num2} = ${result}`);
} else if (operation == "*") {
  result = num1 * num2;
  document.write(`${num1} x ${num2} = ${result}`);
} else if (operation == "/") {
  result = num1 / num2;
  document.write(`${num1} / ${num2} = ${result}`);
} else {
  document.write("Desculpe, operação inválida.");
}
