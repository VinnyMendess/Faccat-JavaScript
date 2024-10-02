let nascimento = parseInt(prompt("Qual o ano em que você nasceu? "));

let ano = (2024-nascimento);
let dias = (ano*365);
let mes = (ano*12);
let hora = (dias*24);
let milesimo = (minutos*60000)
console.log(`Você tem ${ano} anos, ${dias} dias, ${mes} meses, ${hora} horas, ${milesimo} milesimo.`);
