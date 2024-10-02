let nome, sexo;
let altura, pesoIdeal;

nome = prompt("Digite o seu nome: ");
altura = parseFloat(prompt("Digite a sua altura (em metros): "));
sexo = prompt("Digite o seu sexo (M para masculino, F para feminino): ").toUpperCase();

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    console.log("Sexo inválido. Use M para masculino ou F para feminino.");
}

if (pesoIdeal) {
    console.log(`O peso ideal para ${nome} é ${pesoIdeal.toFixed(2)} kg`);
}
