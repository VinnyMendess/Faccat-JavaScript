let numero1 = parseFloat(prompt("Digite um valor: "));
let numero2 = parseFloat(prompt("Digite outro valor: "));
let numero3 = parseFloat(prompt("Digite outro valor: "));

if (numero1 > numero2 && numero1 > numero3) {
    console.log("O maior valor é: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O maior valor é: " + numero2);
} else {
    console.log("O maior valor é: " + numero3);
}
