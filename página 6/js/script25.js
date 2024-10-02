let conta = parseInt(prompt("Digite o numero da conta"));
let saldo = parseFloat(prompt("Digite o saldo da conta"));
let debito  = parseFloat(prompt("Digite o valor do debito"));
let credito = parseFloat(prompt("Digite o valor do credito"));

salarioAtual = saldo-debito+credito

if (saldoAtual >= 0) {
    console.log (`Saldo atual é positivo ${saldoAtual}`);
} else {
    console.log (`Saldo atual é negativo ${saldoAtual}`);
}
