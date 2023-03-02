let conjuntoDados = [10, 12.5, 4.7, 4, 7, 4.3, 1.2 , 15, 16]; 
let cont = 0;

for (let i = 0; i < conjuntoDados.length; i++) {
    if (Number.isInteger(conjuntoDados[i])) {
        cont++;
    }
}

console.log("Quantida de números inteiros : ", cont);