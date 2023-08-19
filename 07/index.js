const nomes = ["Ana", "Joana", "Carlos", "amanda", "angelica", "Alcione"];

let nomesLetraA = [];
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === "a" || nomes[i][0] === "A") {
        nomesLetraA = nomesLetraA + " " + nomes[i];
    }
}
console.log(nomesLetraA);