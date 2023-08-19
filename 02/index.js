const letras = ["A", "a", "B", "C", "E", "e"];

let quantidade = 0;

for (let i = 0; i < letras.length; i++) {
    if (letras[i].toLowerCase() === "e") {
        quantidade++;
    }
}
if (quantidade === 0) {
    console.log("Nenhuma letra 'E' ou 'e' foram encontradas");
} else {
    console.log(`foram encontradas ${quantidade} letras 'E' ou 'e'`);
}



