let a = 9
let b = 3

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

//Essa é a maneira mais simples de se fazer
//Porém, em certos casos, pode ser melhor utilizar funções

//Ficaria desse jeito:
/*
function Funcao_Adicao (a, b) { 
    return a + b
}

console.log("Soma =", Funcao_Adicao(a, b))
*/

//"a" e "b" são parâmetros da função, que se comportam como variáveis locais
//O código dentro da função é executado quando algo invoca(chama) ele
//O "return" para a execução da função