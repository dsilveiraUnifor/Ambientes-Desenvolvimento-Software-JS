// Checa se o numero eh primo
function checaPrimo(num) {
    let divisor = 2;
    while (num > divisor) {
        if (num % divisor == 0) {
            console.log("O numero não é primo !");
            return; 
        }
        divisor++;
    }
    return console.log("O número é primo");
}

checaPrimo(6);