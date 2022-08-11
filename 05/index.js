let name = String(prompt("Digite o seu nome: "));
let age = Number(prompt("Digite o sua idade: "));

let sizeName = name.length;

let yearCurrent = new Date();
let yearOfBirth = yearCurrent.getFullYear() - age;
document.write(`Nome: ${name}, tem ${sizeName} letras. Idade: ${age} anos, nasceu em: ${yearOfBirth}`);
