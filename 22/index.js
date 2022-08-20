const num = Number(prompt("Digite um número inteiro positivo: "));

if (isNaN(num) || num < 0) {
    alert("Esse número não é válido.");
} else {
    const oddOrEven = (num % 2 == 0) ? "Número é par" : "Número é impar";
    alert(oddOrEven);
}
