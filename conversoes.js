// tipos de dados
// booleanos

//conversao implicita
const numero =456;
const numeroString = "456";

//console.log(numero === numeroString);

// ao comparar o js chega a conclusao que numero e diferente de string (numero nao e = a string) e retorna `false` no terminal. Lembrando que comparacao equivale a "===". Com tres iguais o JS compara nao so o valor mas tambem o tipo.

//console.log(numeroString == numero);
//ao fazer essa comparacao acima, utilizando (==) o JS compara o valor, os caracteres. E nao o tipo. Sendo assim retorna `true` no console.

//console.log(numero + numeroString);
//no exemplo acima, o JS retorna `456456` por causa da operacao de soma entre uma string e um numero (dados). Ele acabou concatenando com a operacao, convertendo tudo em uma string.



//conversao explicita
//para fazer a conversao explicita e preciso utilizar duas funcoes especificas do JS: "Number()" e "String()". Utilizamos a primeira para converter strings em numeros, e a segunda quando precisamos converter um numero numa string;

console.log(numero + Number(numeroString));
//reparar que apos a conversao o terminal nos da como resultado a soma entre os numeros, 912. Ao inves de concatenar um numero com uma string.
//pode-se tambem passar a funcao ao definir as variaveis, por exemplo:
//const numero = 456
//const numeroString = Number("456");
//console.log(numero + numeroString), retornando a soma entre as variaveis apos a conversao utilizando a funcao Number() na variavel numeroString.

//importante salientar: se tentarmos converter uma string que nao contem somente numero, como alguma letra ou caractere, o terminal nos retornara NaN.
// como por exemplo: 
//    const numero = 456;
//    const numeroString = Number("456a");
//console.log(numero + numeroString) =====> NaN.