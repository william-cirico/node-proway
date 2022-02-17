import os from "os";

// Informações sobre as threads do processador
console.log(os.cpus());

// Total de memória disponível no sistema
const memoriaLivreEmBytes = os.freemem();
const memoriaLivreEmMegabytes = Math.floor(memoriaLivreEmBytes / 1024 / 1024);
console.log(`Esse computador tem ${memoriaLivreEmMegabytes} MB de memória livre`);

// Sistema operacional
console.log(os.platform());

// Quantidade de segundos que o computador está ligado
const tempoLigadoEmSegundos = os.uptime();
const tempoLigadoEmHoras = Math.floor(tempoLigadoEmSegundos / 60 / 60);
console.log(`Esse computador está ligado à: ${tempoLigadoEmHoras} horas`);


