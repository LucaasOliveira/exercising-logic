
let balance = 1000;
let tax = 4.50;

let withdraw = Number(prompt(`Seu saldo é: R$${balance}. Quanto você deseja saca?`));

let newBalance = balance - tax - withdraw;

if (withdraw > 0 && withdraw % 5 == 0 && balance - tax) {
    document.write(`Você sacou R$${withdraw.toFixed(2)} a taxa de serviço custa R$${tax.toFixed(2)} <br><br>Seu saldo ficou: ${newBalance.toFixed(2)}`);
} else if (withdraw > balance - tax) {
    document.write(`Você não tem dinheiro suficiente para realizar essa transferência.`);
} else {
    document.write(`O número precisa ser múltiplo de 5, saque um valor que termine com 0 ou 5.`);
}
