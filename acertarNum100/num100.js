let numUsuario = document.getElementById("numInserido")
let resultadoVerificacao = document.getElementById("resultado")

function verificar() {
    if (numUsuario.value == 100) {
        //console.log("resultadoVerificacao", resultadoVerificacao.value)
        resultadoVerificacao.innerHTML = ("Parabéns, você acertou!")
        numUsuario.value = numUsuario.defaultValue //limpa o input!

    } else {
        window.alert("Não é este número! Tente novamente!")
        numUsuario.value = numUsuario.defaultValue
    }
}