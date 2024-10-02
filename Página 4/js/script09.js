let salario = parseFloat(prompt("Digite o seu salário: "));

let reajuste = parseFloat(prompt("Digite o reajuste: "));

let novoSalario = salario + (salario * reajuste / 100);

console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`);