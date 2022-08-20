const num1 = Number(prompt("Digite o primeiro número: "))
const num2 = Number(prompt("Digite o segundo número número: "))
const num3 = Number(prompt("Digite o terceiro número: "))

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert("Você repediu algum número na digitação!")
} else {
    const sum = num1 + num2 + num3;
    const average = ((num1 + num2 + num3) / 3).toFixed(2);
    const product = num1 * num2 * num3;

    if ((num1 > num2 && num3) && (num2 < num3)) {
        console.log(`A soma dos 3 números é: ${sum}.\nA média: ${average}.\nO produto: ${product}.\nO maior número digitado foi: ${num1}\nO menor número digitado foi: ${num2} `);
    } else if ((num1 > num2 && num3) && (num3 < num2)) {
        console.log(`A soma dos 3 números é: ${sum}.\nA média: ${average}.\nO produto: ${product}.\nO maior número digitado foi: ${num1}\nO menor número digitado foi: ${num3} `);
    } else if ((num2 > num1 && num3) && (num1 < num3)) {
        console.log(`A soma dos 3 números é: ${sum}.\nA média: ${average}.\nO produto: ${product}.\nO maior número digitado foi: ${num1}\nO menor número digitado foi: ${num1} `);
    } else if ((num2 > num1 && num3) && (num3 < num1)) {
        console.log(`A soma dos 3 números é: ${sum}.\nA média: ${average}.\nO produto: ${product}.\nO maior número digitado foi: ${num1}\nO menor número digitado foi: ${num3} `);
    } else if ((num3 > num1 && num2) && (num1 < num2)) {
        console.log(`A soma dos 3 números é: ${sum}.\nA média: ${average}.\nO produto: ${product}.\nO maior número digitado foi: ${num1}\nO menor número digitado foi: ${num1} `);
    } else {
        console.log(`A soma dos 3 números é: ${sum}.\nA média: ${average}.\nO produto: ${product}.\nO maior número digitado foi: ${num1}\nO menor número digitado foi: ${num2} `);
    }
}
