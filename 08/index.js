const numeros = [3, 24, 1, 80, 11, 7, 15];

let numeroMaior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMaior) {
        numeroMaior = numeros[i]
    }
}
console.log(numeroMaior);