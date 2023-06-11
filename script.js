//var 

//var altura = 5;
//var comprimento = 7;
//area = altura * comprimento;
//console.log(area);
//var area;

//let

// let forma = "retangulo";
// let altura = 5;
// let comprimento = 7;
// let area;
// if (forma === "retangulo") {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento)/2;
// }
// console.log(area);

//const

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;
if (forma === 'quadrado') {
    area = altura*comprimento;
} else {
    area = (altura * comprimento)/2;
}

console.log(area);

//var foi criada no inicio do js. Ela cria variaveis porem de uma maneira mais `solta`, propensa a bugs. Const e let vieram depois. Const se usa quando deve-se colocar um valor fixo a uma variavel, tem que vir ANTES. Assim como o let, porem o let se pode alterar os valores no futuro.