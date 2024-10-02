let atualEstoque = parseInt(prompt("Digite a quantidade atual no estoque: "));

let maximaEstoque = parseInt(prompt("Digite a quantidade máxima no estoque de um produto: "));

let minimoEstoque = parseInt(prompt("Digite a quantidade miníma no estoque de um produto: "));

quantidadeMedia = (maximaEstoque+minimoEstoque)/2

if (atualEstoque >= quantidadeMedia) {
    console.log("Não compre")
} else {
    console.log ("Compre")

}