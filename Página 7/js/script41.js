let mediaAproveitamento, mediaExercicios, nota1, nota2, nota3;

nota1 = parseFloat(prompt("Qual foi a sua nota na prova de Lógica de Programação? "));
nota2 = parseFloat(prompt("Qual foi a sua nota na prova de Java? "));
nota3 = parseFloat(prompt("Qual foi a sua nota na prova de Educação Banco de Dados? "));
mediaExercicios = parseFloat(prompt("Qual é a média da nota dos exercícios? "));

mediaAproveitamento = (nota1 + nota2 + nota3 + mediaExercicios) / 7;

if (mediaAproveitamento >= 9) {
    console.log("Você ficou com 'A' nesse bimestre");
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    console.log("Você ficou com 'B' nesse bimestre");
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
    console.log("Você ficou com 'C' nesse bimestre");
} else if (mediaAproveitamento >= 4) {
    console.log("Você ficou com 'D' nesse bimestre");
} else {
    console.log("Você ficou com 'F' nesse bimestre");
}
