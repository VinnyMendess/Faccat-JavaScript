let ladoA = parseInt(prompt("Digite o primeiro lado do triangulo"));
let ladoB = parseInt(prompt("Digite o segundo lado do triangulo"));
let ladoC = parseInt(prompt("Digite o terceiro lado do triangulo"));

ladoAB = ladoA+ladoB
ladoAC = ladoA+ladoC
ladoBC = ladoB+ladoC

if (ladoA<ladoBC && ladoB>ladoAC && ladoC<ladoAB) {
    console.log ("O triangulo é válido");

} else {
    console.log  ("O triangulo não é válido");

}