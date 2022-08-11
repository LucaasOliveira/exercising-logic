const n = Number(prompt("Escolha um número para saber a tabuada: "));

const i = Number(prompt("Até quanto você quer múltiplicar o número anterior? "));

for (j = 1; j <= i; j++) {
    result = n * j

    document.write(`${j} x ${n} = ${result} <br>`)
};
