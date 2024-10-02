let fruta = prompt("Você comprou Morango ou Maçã? ");
let peso;
let quantidadeMorango, quantidadeMaca;
let total;

switch (fruta.toLowerCase()) {
    case "morango":
        quantidadeMorango = parseInt(prompt("Quantos morangos você comprou: "));
        peso = parseFloat(prompt("Quanto deu o peso em Kg: "));
        
        if (peso <= 5) {
            total = quantidadeMorango * 2.50;
            console.log(`O Morango com o desconto por Kg aplicado deu: R$${total.toFixed(2)}`);
        } else {
            total = quantidadeMorango * 2.20;
            console.log(`O Morango com o desconto por Kg aplicado deu: R$${total.toFixed(2)}`);
        }
        break;

    case "maçã":
        quantidadeMaca = parseInt(prompt("Quantas maçãs você comprou: "));
        peso = parseFloat(prompt("Quanto deu o peso: "));
        
        if (peso <= 5) {
            total = quantidadeMaca * 1.80;
            console.log(`A Maçã com o desconto por Kg aplicado deu: R$${total.toFixed(2)}`);
        } else {
            total = quantidadeMaca * 1.50;
            console.log(`A Maçã com o desconto por Kg aplicado deu: R$${total.toFixed(2)}`);
        }
        break;

    default:
        console.log("Fruta inválida.");
}
