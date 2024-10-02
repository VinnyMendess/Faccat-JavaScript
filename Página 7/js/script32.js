let time1 = parseInt(prompt("Digite o nome do time de casa: "))
let time2 = parseInt(prompt("Digite o nome do time de fora: "))
prompt("Qual foi o placar da partida?")
let gol1 = parseInt(prompt("Numero de gols de casa: "))
let gol2 =  parseInt(prompt("Numero de gols de fora: "))

if (gol1>gol2) {
    console.log(`O ${time1}, foi o vencedor da partida!`)
} else if (gol2>gol1) {
    console.log (`O ${time2}, foi o vencedor da partida!`)
}else{
    console.log  (`O jogo terminou em empate!`)
}
