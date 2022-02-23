/*
2. Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
presentes no arquivo.

Obs.: Nome e sobrenome.
*/
const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

try {
    const dadosArquivo = fs.readFileSync(path.join(__dirname, "arquivos", "exercicioNomes.txt"));

    const dadosEmString = dadosArquivo.toString("utf-8");
    const dadosEmVetor = dadosEmString.split(EOL);
    const nomesComA = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "A");
    console.log(nomesComA);
} catch (error) {
    console.error(error);
}

export {};