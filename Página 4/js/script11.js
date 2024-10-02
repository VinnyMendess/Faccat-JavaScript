let carros = parseFloat(prompt("digite o número de carros vendidos: "));

let valorTotal = parseFloat(prompt("digite o número total das vendas: "));

let salarioFixo = parseFloat(prompt("digite o salário fixo do vendedor: "));

let comissaoCarro = parseFloat(prompt("digite o valor da comissão por carro vendido: "));

let salarioFinal = salarioFixo+(carros*comissaoCarro)+(valorTotal*0.05);

console.log(`O salário final ficoi: ${salarioFinal.toFixed[2]}`);