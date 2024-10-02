let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));
let numero3 = parseFloat(prompt("Digite mais um número: "));

if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
        console.log(`A ordem decrescente dos valores é: ${numero1}, ${numero2}, ${numero3}`);
    } else {
        console.log(`A ordem decrescente dos valores é: ${numero1}, ${numero3}, ${numero2}`);
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
        console.log(`A ordem decrescente dos valores é: ${numero2}, ${numero1}, ${numero3}`);
    } else {
        console.log(`A ordem decrescente dos valores é: ${numero2}, ${numero3}, ${numero1}`);
    }
} else if (numero3 > numero1 && numero3 > numero2) {
    if (numero2 > numero1) {
        console.log(`A ordem decrescente dos valores é: ${numero3}, ${numero2}, ${numero1}`);
    } else {
        console.log(`A ordem decrescente dos valores é: ${numero3}, ${numero1}, ${numero2}`);
    }
}
