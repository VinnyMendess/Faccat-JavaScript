let nome = prompt("Digite o nome do produto: ");
let quantidadeAdquirida = parseInt(prompt("Digite a quantidade adquirida do produto: "));
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto: "));

let total = quantidadeAdquirida * precoUnitario;
let desconto;
let totalPagar;

if (quantidadeAdquirida <= 5) {
    desconto = total * (2 / 100);
    totalPagar = total - desconto;
    console.log(`O total a pagar com o desconto de 2% é de: R$${totalPagar.toFixed(2)}`);
} else if (quantidadeAdquirida > 5 && quantidadeAdquirida <= 10) {
    desconto = total * (3 / 100);
    totalPagar = total - desconto;
    console.log(`O total a pagar com o desconto de 3% é de: R$${totalPagar.toFixed(2)}`);
} else if (quantidadeAdquirida > 10) {
    desconto = total * (5 / 100);
    totalPagar = total - desconto;
    console.log(`O total a pagar com o desconto de 5% é de: R$${totalPagar.toFixed(2)}`);
}

