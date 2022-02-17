"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// O módulo FS permite a interação com o arquivo de sistemas.
// 1) Obtendo as informações de um arquivo
try {
    const informacoesArquivo = fs_1.default.statSync(path_1.default.resolve(__dirname, "./arquivo-teste.txt"));
    console.log(`É um arquivo: ${informacoesArquivo.isFile()}`);
    console.log(`É um diretório: ${informacoesArquivo.isDirectory()}`);
    console.log(`Tamanho do arquivo: ${informacoesArquivo.size} bytes`);
}
catch (error) {
    console.error(error);
}
// 2) Como escrever em um arquivo
const conteudo = `Esse texto foi criado através de um arquivo no node${os_1.EOL}Essa é uma nova linha`;
try {
    fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "arquivos", "arquivo1.txt"), conteudo);
    console.log("O arquivo1.txt foi gerado...");
}
catch (error) {
    console.error(error);
}
// 3) Adicionando informações em um arquivo
const novoConteudo = `${os_1.EOL}uma nova linha foi adicionada no arquivo :D`;
try {
    fs_1.default.appendFileSync(path_1.default.resolve(__dirname, "arquivos", "arquivo1.txt"), novoConteudo);
    console.log("Um novo conteúdo foi adicionado ao arquivo1.txt...");
}
catch (error) {
    console.error(error);
}
// 4) Lendo informações de um arquivo
try {
    const data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "arquivos", "arquivo1.txt"));
    // data é um Buffer. portanto precisamos converter para string (formato utf-8) para conseguirmos
    // visualizar o conteúdo do arquivo.
    console.log(data.toString("utf-8"));
}
catch (error) {
    console.error(error);
}
/*
Exercício:

1. Crie um script que irá salvar as informações da
memória a cada 5 segundos em um arquivo chamado log.txt

As informações devem ser salvas no seguinte formato:
Memória total: xx MB, Memória livre: xx MB, Utilização da memória: xx%

2. Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
presentes no arquivo.

Obs.: Nome e sobrenome.

3. Crie a função "getUserByName" que recebe como parâmetro um nome e retorne o usuário obtido
através do arquivo "users.json". Caso o usuário não exista a função deve exibir a
mensagem: "Usuário não foi encontrado".

4. Faça um script que leia o arquivo "exercicioNomes.txt" e utilize a biblioteca
chalk (https://www.npmjs.com/package/chalk) para mostrar os nomes que começam com a letra A
em vermelho, os nomes que começam com a letra C em azul e os nomes que começam com a letra D
em magenta.
*/
