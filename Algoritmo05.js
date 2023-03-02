let array = [15, 20, 30, 10, 6, 7, 2, 846, 45, 20, 35];

let pivor = array[3];
let arrayMenor = [];
let arrayMaior = [];
let arrayIgual = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] < pivor) {
        arrayMenor.push(array[i]);
    }
    else if (array[i] > pivor) {
        arrayMaior.push(array[i]);
    }
    else {
        arrayIgual.push(array[i]);
    }
}

console.log("Array dos valores maiores que o pivor ", arrayMaior);
console.log("Array dos valores menores que o pivor ", arrayMenor);
console.log("Array dos valores iguais ao pivor ", arrayIgual);