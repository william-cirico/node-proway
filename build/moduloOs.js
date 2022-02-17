"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
// Informações sobre as threads do processador
console.log(os_1.default.cpus());
// Total de memória disponível no sistema
const memoriaLivreEmBytes = os_1.default.freemem();
const memoriaLivreEmMegabytes = Math.floor(memoriaLivreEmBytes / 1024 / 1024);
console.log(`Esse computador tem ${memoriaLivreEmMegabytes} MB de memória livre`);
// Sistema operacional
console.log(os_1.default.platform());
// Quantidade de segundos que o computador está ligado
const tempoLigadoEmSegundos = os_1.default.uptime();
const tempoLigadoEmHoras = Math.floor(tempoLigadoEmSegundos / 60 / 60);
console.log(`Esse computador está ligado à: ${tempoLigadoEmHoras} horas`);
