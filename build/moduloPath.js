"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// O módulo path provê formas de se trabalhar com os caminhos de arquivos
// Podemos acessar a pasta do arquivo atual através da variável __dirname
console.log(__dirname);
// Com o arquivo incluso:
console.log(__filename);
// Obter a extensão de um arquivo
console.log(path_1.default.extname(__filename));
// Retorna um objeto com todas as propriedades do caminho informado:
console.log(path_1.default.parse(__filename));
// Junta todos os caminhos informados usando o separador específico do SO.
console.log(path_1.default.join(__dirname, "src", "teste.js"));
// Junta todos os caminhos informados para formar um caminho absoluto (Parte do diretório atual).
console.log(path_1.default.resolve("src", "teste.js"));
