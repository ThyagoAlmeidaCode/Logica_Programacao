/* Exercício 1: Verificar se um número é par ou ímpar.

Descrição: Dado um número estático (ex: let numero = 7;), crie uma estrutura de decisão que verifique se ele é par ou ímpar e exiba o resultado no console. */

let numero = 7;
if (numero % 2 == 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}


/* Exercício 2: Verificar a maioridade de uma pessoa.

Descrição: Com base em uma idade (ex: let idade = 17;), use uma estrutura de decisão para verificar se a pessoa é maior de idade (18 anos ou mais). Exiba uma mensagem indicando o resultado no console. */

let idade = 17;
if (idade >= 18) {
    console.log("A pessoa é maior de idade.");
} else {
    console.log("A pessoa é menor de idade.");
}

//Nivel medio
/* Exercício 3: Avaliar a aprovação de um aluno.

Descrição: Considerando duas notas (ex: let nota1 = 7; let nota2 = 5;), calcule a média e use uma estrutura de decisão para exibir se o aluno foi aprovado (média >= 6), em recuperação (média entre 4 e 5.9) ou reprovado (média < 4).
 */


let nota1 = 7;
let nota2 = 5;
let media = (nota1 + nota2) / 2;

if (media >= 6) {
    console.log("O aluno foi aprovado.");
} else if (media >= 4 && media < 6) {
    console.log("O aluno está em recuperação.");
} else {
    console.log("O aluno foi reprovado.");
}


/* Exercício 4: Identificar o maior de três números.

Descrição: Dado três números (ex: let a = 10; let b = 15; let c = 12;), crie uma estrutura de decisão que identifique o maior deles e exiba o resultado no console. */

let a = 20;
let b = 15;
let c = 12;

if (a > b && a > c) {
    console.log("O maior número é:", a);
} else if (b > a && b > c) {
    console.log("O maior número é:", b);
} else {
    console.log("O maior número é:", c);
}

/* Nivel dificil 
Exercício 5: Calcular o valor de um produto com desconto.

Descrição: Dado um valor de produto (ex: let preco = 150;) e uma condição de desconto (se o valor for maior que 100, aplique 10% de desconto), calcule o valor final a pagar e exiba o resultado. */

let preco = 150;
let desconto = 0;

if (preco > 100) {
    desconto = preco * 0.1;
}

let precoFinal = preco - desconto;
console.log("O valor final do produto é:", precoFinal);

/* 
Verificar o tipo de triângulo.

Descrição: Dado três lados de um triângulo (ex: let lado1 = 10; let lado2 = 10; let lado3 = 8;), determine se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes) e exiba o tipo no console. */

let lado1 = 10;
let lado2 = 10;
let lado3 = 8;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero.");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}
