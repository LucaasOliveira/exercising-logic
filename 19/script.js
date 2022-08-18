let qty = 0;
let count = 0;
let average;
for (let i = 13; i <= 73; i++) { // 14 15 16 17 18 19 20 ...
    qty = qty + i;               // 0 13 - 13 14 - 27 15 ...
    count++                      //    1       2       3 ...  
    //console.log(qty)
    average = (qty / count).toFixed(2)
}
console.log(average)

