let nascimento = parseFloat(prompt("Digite o ano em que você nasceu: "));
let ano = parseFloat(prompt("Digite em qual ano você está: "));    

let idade =  (ano - nascimento)     

if (idade >= 18) {
    console.log ("Você é maior de idade já pode votar esse ano");
} else {
    let resultado  = 18 - idade;
    console.log  (`Você ainda não pode votar, faltam ${resultado} anos para você votar`)
}