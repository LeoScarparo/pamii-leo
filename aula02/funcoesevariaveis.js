//Forma mais antiga
var variavel1 = "Olá Mundo!"

//Forma mais usada por desenvolvedores
let variavel2 = 3

//Tem um escopo global e não muda
const variavel3 = 8

console.log(variavel1, "Olá turminha do " + variavel2 + "° ano")
console.log(variavel2, variavel3)
console.log(typeof variavel1) //Verifica o tipo da variável
console.log(typeof variavel2)

const obj = {
    nome: "Joao",
    signo: "Escorpião"
}

//Formato JSON - JavaScript Notation Object
console.log(obj.nome, obj.signo)
console.log(typeof obj)