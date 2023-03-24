let a = 9
let b = 3

//Usando Function:

function Funcao_Adicao (a, b) { 
    return a + b
}

function Funcao_Subtracao (a, b) { 
    return a - b
}

function Funcao_Multiplicacao (a, b) { 
    return a * b
}

function Funcao_Divisao (a, b) { 
    return a / b
}

function Funcao_Potenciacao (a, b) { 
    return a ** b
}

function Funcao_Radiciacao (a, b) { 
    return Math.sqrt(a)
}

console.log("Soma =", Funcao_Adicao(a, b))
console.log("Diferença =", Funcao_Subtracao(a, b))
console.log("Produto =", Funcao_Multiplicacao(a, b))
console.log("Quociente =", Funcao_Divisao(a, b))
console.log("Potência de", a,"elevado a", b,"=", Funcao_Potenciacao(a, b))
console.log("Raiz de", a,"=", Funcao_Radiciacao(a, b))

//"a" e "b" são parâmetros da função, que se comportam como variáveis locais
//O código dentro da função é executado quando algo invoca(chama) ele
//O "return" para a execução da função

//Outra maneira, mais simples nesse caso:

/*
//Adição
console.log("A soma (adição) será igual a:", a+b)

//Subtração
console.log("A diferença (subtração) será igual a:", a-b)

//Multiplicação
console.log("O produto (multiplicação) será igual a:", a*b)

//Divisão
console.log("O quociente (divisão) será igual a:", a/b)

//Potenciação
console.log("\n"+a,"elevado a",b,"será igual a",a**b)

//Radiciação
console.log("\nA raiz quadrada de",a,"será igual a:", Math.sqrt(a)) //Raiz de a
console.log("Já a raiz quadrada de",b,"será:", Math.sqrt(b)) //Raiz de b
*/