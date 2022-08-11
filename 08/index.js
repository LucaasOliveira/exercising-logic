const age = Number(prompt("Informe a sua idade: "));
const weight = Number(prompt("Informe o seu peso: "));

if (age <= 12) {
    document.write("Infantil.");
} else if (age >= 13 && age <= 16) {
    if (weight <= 40) {
        document.write("Juvenil leve.");
    } else {
        document.write("Juvenil pesado.");
    }
} else if (age >= 17 && age >= 24) {
    if (weight >= 45) {
        document.write("Sênior leve.");
    } else if (weight > 45 && weight < 60) {
        document.write("Sênior médio.");
    } else {
        document.write("Sênior pesado.");
    }
} else {
    document.write("Veterano.");
}
