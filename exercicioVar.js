var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

//nota se aqui, que a variavel `var` ela e muito "volatil", podendo ser atribuida a qualquer momento com valores diferentes. Ja `let` so se refere quando chamada no seu bloco respectivo. Tanto que no terminal ela aparece tanto como 42 como 29. Ja a variavel const nao permite ser alterada, ela sempre vai se relacionar com o valor que lhe foi atribuido.