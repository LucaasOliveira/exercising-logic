
let pedro = 1.50;
let lucas = 1.10;
let year = 0;

while (pedro >= lucas) {
    lucas += 0.03;
    pedro += 0.02;
    year++

    if (lucas.toFixed(2) == pedro.toFixed(2)) {
        document.write(`Lucas e Pedro vão ter o mesmo tamanho quando se passar ${year} anos.<br>`);
    }
    if (lucas > pedro) {
        document.write(`Lucas vai ser maior que Pedro quando se passar ${year} anos.`);
    }
}

