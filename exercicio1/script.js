// FUNÇÃO IMPRIMIR NOME

function imprimirNome(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}

imprimirNome('Marcela')


// FUNÇÃO TABUADA
function receberNumero(numero){
    const num0 = numero * 0
    const num1 = numero * 1
    const num2 = numero * 2
    const num3 = numero * 3
    const num4 = numero * 4
    const num5 = numero * 5
    const num6 = numero * 6
    const num7 = numero * 7
    const num8 = numero * 8
    const num9 = numero * 9
    const num10 = numero * 10

    console.log(
    `
    0 x ${numero} = ${num0}  
    1 x ${numero} = ${num1}
    2 x ${numero} = ${num2} 
    3 x ${numero} = ${num3} 
    4 x ${numero} = ${num4} 
    5 x ${numero} = ${num5} 
    6 x ${numero} = ${num6} 
    7 x ${numero} = ${num7} 
    8 x ${numero} = ${num8} 
    9 x ${numero} = ${num9} 
    10 x ${numero} = ${num10} 
    `
)
}

const tabuada2 = receberNumero(2)
const tabuada3 = receberNumero(3)

