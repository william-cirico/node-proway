import { EOL } from "os";
import fs from "fs";
import path from "path";

// O módulo FS permite a interação com o arquivo de sistemas.

// 1) Obtendo as informações de um arquivo
try {
    const informacoesArquivo = fs.statSync(path.resolve(__dirname, "./arquivo-teste.txt"));
    console.log(`É um arquivo: ${informacoesArquivo.isFile()}`);
    console.log(`É um diretório: ${informacoesArquivo.isDirectory()}`);
    console.log(`Tamanho do arquivo: ${informacoesArquivo.size} bytes`);
} catch (error) {
    console.error(error);
}

// 2) Como escrever em um arquivo
const conteudo = `Esse texto foi criado através de um arquivo no node${EOL}Essa é uma nova linha`;

try {
    fs.writeFileSync(path.resolve(__dirname, "arquivos", "arquivo1.txt"), conteudo);
    console.log("O arquivo1.txt foi gerado...");
} catch (error) {
    console.error(error);
}

// 3) Adicionando informações em um arquivo
const novoConteudo = `${EOL}uma nova linha foi adicionada no arquivo :D`;

try {
    fs.appendFileSync(path.resolve(__dirname, "arquivos", "arquivo1.txt"), novoConteudo);
    console.log("Um novo conteúdo foi adicionado ao arquivo1.txt...");
} catch (error) {
    console.error(error);
}

// 4) Lendo informações de um arquivo
try {    
    const data = fs.readFileSync(path.resolve(__dirname, "arquivos", "arquivo1.txt"))    

    // data é um Buffer. portanto precisamos converter para string (formato utf-8) para conseguirmos
    // visualizar o conteúdo do arquivo.
    const dataEmString = data.toString("utf-8");    
} catch (error) {
    console.error(error);
}

/*
Exercício:

1. Crie um script que irá salvar as informações da
memória a cada 5 segundos em um arquivo chamado log.txt

As informações devem ser salvas no seguinte formato:
Memória total: xx MB, Memória livre: xx MB, Utilização da memória: xx%

function escreveLogMemoria() {
    const memoriaTotal = Math.floor(os.totalmem() / 1024 / 1024);
    const memoriaLivre = Math.floor(os.freemem() / 1024 / 1024);
    const usoMemoria = Math.floor((memoriaLivre * 100) / memoriaTotal);

    const conteudo = `Memória total: ${memoriaTotal} MB, Memória livre: ${memoriaLivre} MB, Utilização da memória: ${usoMemoria}%`;

    try {
        fs.appendFileSync(path.resolve("arquivos", "log.txt"), conteudo);
    } catch (error) {
        console.error(error);
    }
}

setInterval(escreveLogMemoria, 5000);

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





