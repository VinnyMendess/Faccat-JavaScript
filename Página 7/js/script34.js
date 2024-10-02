let valorX = parseFloat(prompt("Digite um valor: "));
let valorY = parseFloat(prompt("Digite outro valor: "));

let valorZ = (valorX * valorY) + 5;

if (valorZ <= 0) {
    console.log("Resultado A");
} else if (valorZ <= 100) {
    console.log("Resultado B");
} else {
    console.log("Resultado C");
}
