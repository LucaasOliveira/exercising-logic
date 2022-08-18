const num = 5;

if (num >= 1 && num <= 10) {
    for (let i = 1; i <= 10; i++) {

        console.log(`${i} x ${num} = ${i * num}`)
    }
} else {
    console.log("Número inválido. Escolha um número entre 1 e 10.")
}
