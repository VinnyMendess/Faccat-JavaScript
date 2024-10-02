let horasMes = parseFloat(prompt("Digite quantas horas foram trabalhadas  no mês: "));

let salarioHora = parseFloat(prompt("Digite o valor da sua hora trabalhada: "));

if (horasMes>160) {
    horasMesExtra = horasMes-160
    salarioHoraMetade = horasMesExtra*(salarioHora*1.5)
    totalExtra = total+salarioHoraMetade
    console.log (`O salário total com as horas extras é de: ${totalExtra}`)
} else {
    total = horasMes*salarioHora
    console.log (`O salário total é de: ${total}`)
}