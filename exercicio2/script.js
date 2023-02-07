function somaNum(numero1, numero2) {
    const soma = numero1 + numero2
    console.log(soma)
}

somaNum(2,4)

function maiorOuIgualNum(numero1, numero2) {
    const maior = numero1 >= numero2
    console.log(maior)
}

maiorOuIgualNum(2,4)

function parOuImpar(numero) {
    const par = numero % 2 == 0
    const frase = `O ${numero} é par? ${par}`
    console.log(frase)
}

parOuImpar(3)

function calcularSalarioLiquido(salario) {
    const descontoInss = salario * 10 / 100 
    const salarioLiquido = salario - descontoInss
    return salarioLiquido
}

console.log(calcularSalarioLiquido(2000)) 