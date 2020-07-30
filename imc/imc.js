let peso = document.getElementById("idPeso")
let altura = document.getElementById("idAltura")


function calcularImc() {
    let resultado = document.getElementById("resultadoImc")
    let imc = parseFloat(peso.value / (altura.value * altura.value)).toFixed(2)

    resultado.innerHTML = `Seu IMC é ${imc}.` + ("<br>")

    if (imc < 18.5) {
        resultado.innerHTML += `Você está abaixo do peso.`
    } else if (imc > 18.5 && imc < 25.0) {
        resultado.innerHTML += `Você está na faixa de peso ideal.`
    } else {
        resultado.innerHTML += `Você está acima do peso.`
    }
}

function limparInputs() {
    peso.value = peso.defaultValue
    altura.value = altura.defaultValue
}