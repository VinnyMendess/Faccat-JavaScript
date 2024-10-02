let valor = parseFloat(prompt("Digite o valor de fábrica do carro: "));

let valorAjustado = valor*(1+0.28+0.45)+valor;

console.log(`O valor do carro com os impostos e parte distributiva, foi de: R$ ${valorAjustado.toFixed[2]}`);
