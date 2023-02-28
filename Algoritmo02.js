// Somatório

let a = parseInt(prompt("Digite a quantidade de números"));
let cont = 0;

function calculaSomatorio(a) {
    for (let i = 0; i < a; i++) {
        let num = parseInt(prompt("Digite o numero atual"));
        cont += num;
    }

    console.log("Somatório", cont);
}

calculaSomatorio(a);