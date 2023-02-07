const num1 = Number(prompt(`Informe o primeiro número:`))
const num2 = Number(prompt(`Informe o segundo número:`))

function somar(num1,num2){
    const soma = num1 + num2
    const frase = `O resultado de ${num1} + ${num2} é: ${soma}`
    return frase
}

function subtrair(num1,num2){
    const subtracao = num1 - num2
    const frase = `O resultado de ${num1} - ${num2} é: ${subtracao}`
    return frase
}

function multiplicar(num1,num2){
    const multiplicar = num1 * num2
    const frase = `O resultado de ${num1} * ${num2} é: ${multiplicar}`
    return frase
}

function dividir(num1,num2){
    const divisao = num1 / num2
    const frase = `O resultado de ${num1} / ${num2} é: ${divisao}`
    return frase
}

const soma = somar(num1,num2)
const subtracao = subtrair(num1,num2)
const multiplicacao = multiplicar(num1,num2)
const divisao = dividir(num1,num2)

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)


