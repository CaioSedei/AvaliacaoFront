

const buttonEx = document.getElementById("bnt")
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")
const resultSoma = document.getElementById("soma")
const resultSub = document.getElementById("sub")
const resultMult = document.getElementById("mult")
const resultDIV = document.getElementById("div")

buttonEx, addEventListener("click", () => {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)

    const soma = num1 + num2
    const sub = num1 - num2
    const mult = num1 * num2
    const div = num1 / num2

    resultSoma.textContent = "Soma = " + soma
    resultSub.textContent = "Subtração = " + sub
    resultMult.textContent = "Multiplicação = " + mult
    resultDIV.textContent = "Divisão = " + div
})