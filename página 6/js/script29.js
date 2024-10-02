let numero1 = parseInt(prompt("Digite um numero: "))
let numero2 = parseInt(prompt("Digite outro numero: "))
let numero3  = parseInt(prompt("Digite outro numero: "))

if (numero1 && numero2 > numero3) {
    adicao =  numero1 + numero2
    console.log(`O numer ${numero1} e ${numero2} são os dois maiores`)
    console.log (`A soma dos dois maiores é ${adicao}`)

} else if  (numero1 && numero3 > numero2) {
    adicao =  numero1 + numero3
    console.log(`O numer ${numero1} e ${numero3} são os dois maiores`)
    console.log (`A soma dos dois maiores é ${adicao}`)   
}else {
    adicao =  numero2 + numero3
    console.log(`O numer ${numero2} e ${numero3} são os dois maiores`)
    console.log (`A soma dos dois maiores é ${adicao}`)
}
