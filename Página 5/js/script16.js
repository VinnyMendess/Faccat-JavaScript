prompt("Maçá R$1,30 cada 12 por R$1,00 cada");
let maca = parseInt(prompt("Digite um valor: "));

if (maca >= 12) {
    console.log("Cada maçã sairá por R$ 1,00");
    
} else {
    macas  = maca * 1.30;

    console.log (`Cada maçá sairá por R$ ${macas}`);
}