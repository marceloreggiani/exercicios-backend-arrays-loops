const original = [1, 4, 12, 21, 53, 88, 112];

let numerosPares = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        numerosPares.push(original[i]);
    }
}
console.log(numerosPares);