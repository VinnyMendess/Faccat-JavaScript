let salarioFixo = parseFloat(prompt("Digite o seu salário fixo: "));
let valoVenda = parseFloat(prompt("Digite o valor das vendas: "));

if (valorVenda<=1500) {
    comissao = salarioFixo*0.3
} else {
    comissao = salarioFixo*0.5
}

salarioFinal = salarioFixo+comissao

console.log(`O salário finao com a comissao aplicada foi de: ${salarioFinal}`)
