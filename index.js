// Desafio 2
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function determinarNivel(vitorias) {
    if (vitorias < 10) return "Ferro";
    else if (vitorias >= 11 && vitorias <= 20) return "Bronze";
    else if (vitorias >= 21 && vitorias <= 50) return "Prata";
    else if (vitorias >= 51 && vitorias <= 80) return "Ouro";
    else if (vitorias >= 81 && vitorias <= 90) return "Diamante";
    else if (vitorias >= 91 && vitorias <= 100) return "Lendário";
    else return "Imortal";
}

let vitorias = gerarNumeroAleatorio(0, 120); // Gera um número entre 0 e 120
let derrotas = gerarNumeroAleatorio(0, 100); // Gera um número entre 0 e 100

let saldoVitorias = calcularSaldo(vitorias, derrotas);
let nivel = determinarNivel(vitorias);

console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel} (Vitórias: ${vitorias}, Derrotas: ${derrotas})`);