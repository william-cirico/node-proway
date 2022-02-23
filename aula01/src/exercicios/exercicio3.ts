import { json } from "node:stream/consumers";

/*
3. Crie a função "getUserByName" que recebe como parâmetro um nome e retorne o usuário obtido 
através do arquivo "users.json". Caso o usuário não exista a função deve exibir a 
mensagem: "Usuário não foi encontrado".
*/
const path = require("path");
const fs = require("fs");

interface User {
    nome: string;
    idade: number;
    email: string;
}

function getUserByName(name: string): User | void {
    const dadosArquivo = fs.readFileSync(path.join(__dirname, "arquivos", "users.json"));
    const dadosEmString = dadosArquivo.toString("utf-8");
    const dadosEmJson = JSON.parse(dadosEmString);

    const usuarioEncontrado = dadosEmJson.find((e: User) => e.nome.toUpperCase() === name.toUpperCase());

    if (!usuarioEncontrado) {
        console.log("Usuário não foi encontrado");
        return
    }

    console.log(usuarioEncontrado);
}

getUserByName("João");

export {};