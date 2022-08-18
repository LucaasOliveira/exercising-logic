let num = 10;

if (num <= 1) {
    console.log("não é um número primo.")
} else {
    let qty = 0;

    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            qty++
        }
    }
    if (qty > 2) {
        console.log(num + " não é um número primo.")
    } else {
        console.log(num + " é um número primo.")
    }
}


