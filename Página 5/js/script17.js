let avaliacao1 = parseFloat(prompt("Quanto você tirou na primeira avaliação: "));
let avaliacao2 = parseFloat(prompt("Quanto você tirou na segunda avaliação: "));    

let resultado =  (avaliacao1 + avaliacao2) / 2;     

if (resultado >= 6) {
    console.log ("Você está aprovado!");
    console.log  ("Sua média foi: " + resultado);
} else {
    console.log ("Você está reprovado!");
    console.log   ("Sua média foi: " + resultado);
}
