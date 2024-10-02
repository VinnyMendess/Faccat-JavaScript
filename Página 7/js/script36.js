let idadeH1 = parseInt(prompt("Digite a idade do Homem 1"));
let idadeH2 = parseInt(prompt("Digite a idade do Homem 2"));
let idadeM1 =  parseInt(prompt("Digite a idade da Mulher 1"));
let idadeM2 =  parseInt(prompt("Digite a idade da Mulher 2"));

if (idadeH1>idadeH2&&idadeM1<idadeM2) {
    idade = idadeH1+idadeM1
    console.log (`A soma dos dois maiores é ${idade}`)
} else if (idadeH1>idadeH2&&idadeM2<idadeM1) {
    idade = idadeH1+idadeM2
    console.log (`A soma dos dois maiores é ${idade}`)
}else{
    idade = idadeH2+idadeM2
    console.log (`A soma dos dois maiores é ${idade}`)
}
