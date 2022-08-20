const a = Number(prompt("Digite o valor de um lado 'A' do triângulo: "));
const b = Number(prompt("Digite o valor de um lado 'B' do triângulo: "));
const c = Number(prompt("Digite o valor de um lado 'C' do triângulo: "));

if (a < b + c && b < a + c && c < a + b) {
    if (a == b && a == c && b == c) {
        console.log("Triângulo equilátero ");
    } else if (a != (b && c) && b != (c && a)) {
        console.log("Triângulo escaleno");
    } else {
        console.log("Triângulo isósceles");
    }
} else {
    console.log("Esses valores não formam um triângulo.");
}
