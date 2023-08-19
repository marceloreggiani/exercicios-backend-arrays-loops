const numeros = [54, 22, 14, 87, 10, 284];

let localIndice = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        localIndice = i;
        break
    }
}
if (localIndice !== -1) {
    console.log(`O numero 10 foi encontrado na posição ${localIndice}`);
} else {
    console.log(localIndice);
}