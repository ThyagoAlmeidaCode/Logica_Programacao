# O que são operadores?
Os operadores são como feitiços mágicos que permitem aos programadores realizar diferentes tipos de operações com os valores armazenados nas variáveis. Eles podem ser classificados em três tipos principais:

1. Operadores Aritméticos: Para fazer cálculos matemáticos.
2. Operadores Relacionais: Para comparar valores.
3. Operadores Lógicos: Para tomar decisões com base em condições.

## Operadores Aritméticos

1. Soma (+): Adiciona dois valores.
Exemplo: 2 + 3 resulta em 5.

2. Subtração (-): Subtrai um valor de outro.
Exemplo: 5 - 2 resulta em 3.

3. Multiplicação (*): Multiplica dois valores.
Exemplo: 4 * 3 resulta em 12.

4. Divisão (/): Divide um valor por outro.
Exemplo: 10 / 2 resulta em 5.

4. Resto da divisão (%): Dá o resto de uma divisão entre dois números.
Exemplo: 10 % 3 resulta em 1, porque 10 dividido por 3 é 3, com resto 1.

Exemplo de Operadores Aritméticos

```bash 

let a = 10;
let b = 3;

console.log("Soma: " + (a + b));  // Soma: 13
console.log("Subtração: " + (a - b));  // Subtração: 7
console.log("Multiplicação: " + (a * b));  // Multiplicação: 30
console.log("Divisão: " + (a / b));  // Divisão: 3.333...
console.log("Resto: " + (a % b));  // Resto: 1

```

## Operadores Relacionais
Os operadores relacionais são usados para comparar valores, respondendo a perguntas como "Esse valor é maior que o outro?" ou "Esses valores são iguais?". Os principais operadores relacionais são:

1. Maior que (>): Verifica se o valor da esquerda é maior que o da direita.
Exemplo: 10 > 5 resulta em true.

2. Menor que (<): Verifica se o valor da esquerda é menor que o da direita.
Exemplo: 3 < 8 resulta em true.

3. Maior ou igual (>=): Verifica se o valor da esquerda é maior ou igual ao da direita.
Exemplo: 5 >= 5 resulta em true.

4. Menor ou igual (<=): Verifica se o valor da esquerda é menor ou igual ao da direita.
Exemplo: 2 <= 3 resulta em true.

5. Igual (==): Verifica se dois valores são iguais.
Exemplo: 10 == 10 resulta em true.

6. Diferente (!=): Verifica se dois valores são diferentes.
Exemplo: 10 != 5 resulta em true.

Exemplo de Operadores Relacionais

``` bash 

let idade = 20;
let idadeMinimaParaVotar = 18;

console.log(idade > idadeMinimaParaVotar);  // true, porque 20 é maior que 18.
console.log(idade == 18);  // false, porque 20 não é igual a 18.
console.log(idade != 18);  // true, porque 20 é diferente de 18.


```
## Operadores Lógicos
Os operadores lógicos são usados para combinar condições ou verificar várias condições ao mesmo tempo. Eles ajudam a tomar decisões mais complexas, como "Isso e aquilo são verdade?" ou "Isso ou aquilo é verdade?".

1. E lógico (&&): Verifica se ambas as condições são verdadeiras.
Exemplo: (10 > 5) && (8 < 12) resulta em true, porque ambas as comparações são verdadeiras.

2. Ou lógico (||): Verifica se pelo menos uma das condições é verdadeira.
Exemplo: (10 < 5) || (8 < 12) resulta em true, porque uma das comparações é verdadeira.

3. Não lógico (!): Inverte o valor lógico. Se algo é true, o operador ! transforma em false e vice-versa.
Exemplo: !(10 > 5) resulta em false, porque 10 > 5 é true, e o operador ! inverte para false.

Exemplo de Operadores Lógicos
```bash

let idade = 20;
let temIdentidade = true;

let podeVotar = (idade >= 18) && temIdentidade;
console.log(podeVotar);  // true, porque a idade é maior que 18 e a pessoa tem identidade.

let podeTirarCNH = (idade >= 18) || temIdentidade;
console.log(podeTirarCNH);  // true, porque a pessoa é maior de idade (mesmo que não tivesse identidade).


```