let a, b, c;

a = parseInt(prompt("Digite um valor para o lado de um triângulo: "));
c = parseInt(prompt("Digite um valor para o lado de um triângulo: "));
b = parseInt(prompt("Digite um valor para o lado de um triângulo: "));

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if (a === b && b === c) {
        console.log("Triângulo Equilátero");
    } else if (a === b || b === c || a === c) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Não é possível formar um triângulo");
}
