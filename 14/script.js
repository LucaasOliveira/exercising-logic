const time = prompt("Digite: “M” para matutino \n“V” para vespertino\n“N” para noturno");

switch (time.toUpperCase()) {
    case 'M':
        console.log("Bom dia!")
        break;
    case 'V':
        console.log("Boa tarde!")
        break;
    case 'N':
        console.log("Boa Noite!")
        break;
    default:
        console.log("Valor inválido!")
        break;
}
