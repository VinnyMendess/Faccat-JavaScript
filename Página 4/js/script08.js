let total = parseFloat(prompt("Digite o numero total de eleitores para a prefeitura de São Paulo: "));
let nulo = parseFloat(prompt("Digite o numero total de votos nulos: "));
let branco = parseFloat(prompt("Digite o numero total de votos brancos: "));
let validos = parseFloat(prompt("Digite o numero total de votos validos: "));

let Porcentagem = (branco / total) * 100;

let PorcentagemNulo = (nulo / total) * 100;

let  PorcentagemValido = (validos / total) * 100;

let  PorcentagemTotal = Porcentagem + PorcentagemNulo + PorcentagemValido;

console.log(`Total: ${PorcentagemTotal}, Nulos: ${PorcentagemNulo}, Validos: ${PorcentagemValido}, Brancos: ${Porcentagem}`);

