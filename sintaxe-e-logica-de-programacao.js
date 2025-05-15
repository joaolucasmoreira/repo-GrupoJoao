// LÓGICA DE PROGRAMAÇÃO

console.log("VARIÁVEIS E CONSTANTES");
// VARIÁVEIS E CONSTANTES

let numero1 = 10;
const numero2 = 5;

// Como ver o valor de uma variável

console.log(numero1); // Basta chamar a variável 
console.log(numero2);

// Como alterar o valor de uma variável

numero1 = 20;
console.log(numero1);

console.log("TIPOS DE VALORES");
// TIPOS DE VALORES

// NUMÉRICOS (Inteiro, Decimal, Octal, Hexadecimal)
let numero = 0;
let valorDecimal = 10.5; 
numero = '0';
console.log(numero)
// TEXTO/CARACTERES (String)
const string1 = "Olá, mundo!";
// LÓGICO (Boolean)
const booleano = true;
// NÚLO (Null)
const nulo = null;
// INDEFINIDO (Undefined)
const indefinido = undefined;
// VETORES (array de valores do mesmo tipo)
const array = [1, 2, 3, 4, 5];

console.log("OPERADORES DE ATRIBUIÇÃO, ARITMÉTICOS, RELACIONAIS E LÓGICOS");
// OPERADORES DE ATRIBUIÇÃO, ARITMÉTICOS, RELACIONAIS E LÓGICOS

console.log("ATRIBUIÇÃO");
// Atribuição
/*
 atribuir valor = a = b
 acrescentar um valor 'b' ao valor 'a' = a += b
 decrescentar um valor 'b' ao valor 'a' =a -= b
 multiplicar um valor 'b' ao valor 'a' = a *= b
 dividir  um valor 'b' ao valor 'a' = a /= b
 modular valor 'b' ao valor 'a' = a %= b
 incremento pré-fixado = '++a'
 incremento pós-fixado = 'a++'
 decremento pré-fixado = '--a'
 decremento pós-fixado = 'a--'
 concatenação = '+'
 */
// Exemplo de uso
let a = 10;
a += 5; // a = a + 5
console.log(a); // 15

console.log("ARITMÉTICOS");
// Aritméticos

/*
 soma = +
 subtração = -
 multiplicação = *
 divisão = /
 exponenciação = **
 módulo = %

*/
//Exemplo de uso

console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 ** 2); // 100
console.log(10 % 3); // 1


console.log("RELACIONAIS");
// Relacionais

/*
 igual = '=='
 diferente = '!='
 menor que = '<'
 maior que = '>'
 menor ou igual = '<='
 maior ou igual = '>='
*/

// Exemplo de uso

console.log(10 == 10); // true
console.log(10 != 10); // false
console.log(10 < 15); // true
console.log(10 > 15); // false
console.log(10 <= 10); // true

console.log("LÓGICOS");
// Lógicos

/*
 e (AND) = '&&'
 ou (OR) = '||'
 não (NOT) = '!'
*/
// Exemplo de uso

console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false

// Comentários

// Comentário de uma linha

/*
 Comentário de múltiplas linhas
 */

// COMENTÁRIOS 
// JS -> // ou /* */
// CSS -> /* */
// HTML -> <!-- -->
