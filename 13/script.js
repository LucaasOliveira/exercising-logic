const h = Number(prompt("Informe sua altura em metros: "));
const gender = Number(prompt("Digite  [1] - Mulher \n [2] - Homem"))

let weight;

switch (gender) {
    case 1:
        weight = (62.1 * h) - 44.7;
        console.log(weight)
        break;
    case 2:
        weight = (72.7 * h) - 58;
        console.log(weight)
        break;
    default:
        console.log("Opção inválida!")
        break;
}

