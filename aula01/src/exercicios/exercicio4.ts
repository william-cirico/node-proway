/*
4. Faça um script que leia o arquivo "exercicioNomes.txt" e utilize a biblioteca 
chalk (https://www.npmjs.com/package/chalk) para mostrar os nomes que começam com a letra A
em vermelho, os nomes que começam com a letra C em azul e os nomes que começam com a letra D
em magenta.
*/
const path = require("path");
const { EOL } = require("os");
const fs = require("fs");
const chalk = require("chalk");

try {
    const dadosArquivo = fs.readFileSync(path.join(__dirname, "arquivos", "exercicioNomes.txt"));

    const dadosEmString = dadosArquivo.toString("utf-8");
    const dadosEmVetor = dadosEmString.split(EOL);

    const nomesComA = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "A");
    const nomesComC = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "C");
    const nomesComD = dadosEmVetor.filter((e: string) => e[0].toUpperCase() === "D");

    nomesComA.forEach((e: string) => console.log(chalk.red(e)));
    nomesComC.forEach((e: string) => console.log(chalk.blue(e)));
    nomesComD.forEach((e: string) => console.log(chalk.magenta(e)));
} catch (error) {
    console.error(error);
}

export {};