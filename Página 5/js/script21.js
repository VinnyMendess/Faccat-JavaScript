let inicioHora = parseInt(prompt("Digite em que horas começou a partida de xadrez: "));
let fimHora = parseInt(prompt("Digite em que horas acabou a partida de xadrez: "));

if (inicioHora < fimHora) {
    resultado = fimHora - inicioHora
} else {
    resultado = (24 - inicioHora)+fimHora
}

console.log ("A partida de xadrez durou " + resultado + " horas");

if (resultado === 24) {
    console.log("A partida de xadrez chegou no limite de tempo");
    
}
