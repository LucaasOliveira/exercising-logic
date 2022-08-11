for (num = 1; num <= 250; num++) {
    document.write(num + " <br>")
    if (num % 3 == 0 && num % 5 == 0) {
        document.write(num + " é múltiplo de 3 e 5.<br>")
    } else if (num % 5 == 0) {
        document.write(num + " é múltiplo 5.<br>")
    } else if (num % 3 == 0) {
        document.write(num + " é múltiplo de 3.<br>")
    }
}
