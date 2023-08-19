const numeros = [8, 11, 4, 1];

let numeroMaior = numeros[0]
let numeroMenor = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMaior) {
        numeroMaior = numeros[i]
    }
    if (numeros[i] < numeroMenor) {
        numeroMenor = numeros[i]
    }
}
console.log(numeroMaior - numeroMenor);

