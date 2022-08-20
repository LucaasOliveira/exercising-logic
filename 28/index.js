const price = 1000;
const qtyInstallments = 6;
let valueInstallments;
let finalPrice;

if (qtyInstallments == 1) {

    finalPrice = price - (price * (2.5 / 100))

    console.log(`Preço de tabela: R$ ${price} \nNúmero de parcelas: ${qtyInstallments} \n Compraa vista 2.5% de 
    desconto. \n Total: R$${finalPrice}`)

} else if (qtyInstallments <= 5) {

    finalPrice = price
    valueInstallments = (price / qtyInstallments).toFixed(2)

    console.log(`Preço de tabela: R$ ${price} \nNúmero de parcelas: ${qtyInstallments} \n Compra a prazo com o valor de cada parcelaR$ ${valueInstallments}. \n Total: R$${finalPrice}`)

} else if (qtyInstallments <= 10) {

    finalPrice = price + price * (6 / 100)
    valueInstallments = (price / qtyInstallments).toFixed(2)

    console.log(`Preço de tabela: R$ ${price} \nNúmero de parcelas: ${qtyInstallments} \n Compra a prazo com acréscimo de 6% no valor de cada parcelaR$${valueInstallments}. \n Total: R$${finalPrice}`)

} else if (qtyInstallments <= 15) {

    finalPrice = price + price * (13 / 100)
    valueInstallments = (price / qtyInstallments).toFixed(2)

    console.log(`Preço de tabela: R$ ${price} \nNúmero de parcelas: ${qtyInstallments} \n Compra a prazo com acréscimo de 13% no valor de cada parcelaR$${valueInstallments}. \n Total: R$${finalPrice}`)

} else {
    console.log(`Número de parcelas ivalidas`)
}
