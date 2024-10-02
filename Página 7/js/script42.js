let codigo, idade, nascimento, ingressoEmpresa;

codigo = parseInt(prompt("Digite o código de usuário da Symbee: "));

if (codigo === 1) {
    nascimento = parseInt(prompt("Quando você nasceu? "));
    ingressoEmpresa = parseInt(prompt("Em que ano você ingressou na empresa? "));
    
    idade = 2024 - nascimento;
    ingressoEmpresa = 2024 - ingressoEmpresa;

    if (idade >= 65) {
        console.log(`Você tem ${idade} anos de idade e já pode requerer a sua aposentadoria.`);
        console.log(`Sua contribuição na empresa foi no total: ${ingressoEmpresa} anos.`);
    } else if (ingressoEmpresa >= 30) {
        console.log(`Você tem ${ingressoEmpresa} anos de empresa e já pode requerer a sua aposentadoria.`);
        console.log(`Você tem: ${idade} anos.`);
    } else if (idade === 60 && ingressoEmpresa === 25) {
        console.log(`Você tem ${idade} anos de idade e ${ingressoEmpresa} anos de empresa, já pode requerer a sua aposentadoria.`);
    } else {
        console.log("Você não pode requerer a sua aposentadoria.");
    }
} else {
    console.log("Login incorreto.");
}
