let anoAtual = document.getElementById("anoAtual")
let anoNascimento = document.getElementById("anoNascimento")
let resultadoIdade = document.getElementById("resultado")

function verificarIdade() {
    let idade = anoAtual.value - anoNascimento.value
    let idadeMeses = idade * 12
    let idadeSemanas = idade * 52
    let idadeDias = idade * 365

    resultadoIdade.innerHTML = `Sua idade em anos é: ${idade} anos` + ("<br>")
    resultadoIdade.innerHTML += `Sua idade em meses é: ${idadeMeses} meses` + ("<br>")
    resultadoIdade.innerHTML += `Sua idade em semanas é: ${idadeSemanas} semanas` + ("<br>")
    resultadoIdade.innerHTML += `Sua idade em dias é: ${idadeDias} dias`
}