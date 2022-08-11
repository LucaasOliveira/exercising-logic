let quantity = Number(prompt("Quantas maçãs você deseja levar?"));

if (quantity < 12 && quantity > 0) {
  let price = quantity * 0.3;
  document.write(`Valor total da compra: R$${price.toFixed(2)}`);
} else {
  let price = quantity * 0.25;
  document.write(`Valor total da compra: R$${price.toFixed(2)}`);
}
