/**
 * 1-  Construa uma página/programa onde o usuário digitará dois números e o programa
    dará, como resultado, a soma dos dois números.
 */

const prompt = require('prompt-sync')();
var num_1 = prompt("Informe o primeiro valor: ")
var num_2 = prompt("Informe o segundo valor: ")

let soma = parseInt(num_1) + parseInt(num_2)

console.log("A soma é: " + soma)


 /*
    Construa uma página/programa onde o usuário digitará um número e o programa
    escreverá, na tela, o resultado do quadrado deste número. Atenção: utilizar apenas
    operadores básicos.

 */

let nmeroUsusario = prompt("Informe um numero>: ")
let quadrado = nmeroUsusario **2