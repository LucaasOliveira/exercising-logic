const yearOfBirth = Number(prompt("Digite o ano do seu nascimento: "));

const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;

const validation = (age >= 16) ? "Pode votar este ano." : "Ainda não tem idade para votar.";

console.log(validation);
