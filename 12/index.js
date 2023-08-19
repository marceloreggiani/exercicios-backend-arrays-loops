const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteFilaDentro = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDentro) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift()
}
console.log("DENTRO", filaDeDentro);
console.log("FORA", filaDeFora);