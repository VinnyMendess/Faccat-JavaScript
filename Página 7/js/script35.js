let combustivel = prompt("Qual vai querer (A - Álcool, G - Gasolina): ");
let litros = parseFloat(prompt("Quantos litros: "));
let calculo;

console.log("-----------------------------------------------");
console.log("Álcool: R$2,90");
console.log("Até 20 litros, desconto de 3% por litro");
console.log("Acima de 20 litros, desconto de 5% por litro");
console.log("-----------------------------------------------");
console.log("Gasolina: R$3,30");
console.log("Até 20 litros, desconto de 4% por litro");
console.log("Acima de 20 litros, desconto de 6% por litro");
console.log("-----------------------------------------------");

if (combustivel.toUpperCase() === "A") { // Álcool
    if (litros <= 20) {
        calculo = 2.90 * litros * (1 - 0.03); // Desconto de 3%
        console.log(`O total do álcool com desconto de 3% é: R$${calculo.toFixed(2)}`);
    } else {
        calculo = 2.90 * litros * (1 - 0.05); // Desconto de 5%
        console.log(`O total do álcool com desconto de 5% é: R$${calculo.toFixed(2)}`);
    }
} else if (combustivel.toUpperCase() === "G") { // Gasolina
    if (litros <= 20) {
        calculo = 3.30 * litros * (1 - 0.04); // Desconto de 4%
        console.log(`O total da gasolina com desconto de 4% é: R$${calculo.toFixed(2)}`);
    } else {
        calculo = 3.30 * litros * (1 - 0.06); // Desconto de 6%
        console.log(`O total da gasolina com desconto de 6% é: R$${calculo.toFixed(2)}`);
    }
} else {
    console.log("Combustível inválido.");
}
