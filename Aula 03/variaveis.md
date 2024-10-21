# O que são variáveis?
Variáveis são caixinhas que guardam valores. Imagine que você tem uma caixinha com o nome escrito do lado de fora, e você pode colocar algo dentro dessa caixa. No mundo da programação, essas caixinhas podem guardar diferentes tipos de coisas, como números, palavras, ou até mesmo listas de coisas!

Cada vez que você cria uma variável, você dá a ela um nome e decide o que vai guardar nela.

## Por exemplo:

Imagine que você quer guardar o nome de uma pessoa, pode criar uma caixinha chamada "nome" e colocar o valor "Senac" dentro dela.
Ou, se quiser guardar a idade de alguém, pode criar uma caixinha chamada "idade" e colocar o número 30 dentro.
Principais tipos de variáveis
Em Programelândia, existem diferentes tipos de variáveis, ou seja, tipos diferentes de tesouros que elas podem guardar. Vamos conhecer alguns dos mais comuns:

*** Números Inteiros (integers): *** São números sem parte decimal. Exemplo: 10, -3, 25.
Exemplo: idade = 30

*** Números Decimais (floats): *** São números com parte decimal. Exemplo: 5.75, -2.5, 10.0.
Exemplo: altura = 1.75

*** Textos (strings): *** São palavras ou frases. Eles sempre são colocados entre aspas. Exemplo: "Olá, mundo!", "Thyago".
Exemplo: nome = "Senac"

*** Booleanos (booleans): *** São variáveis que só podem guardar dois valores: verdadeiro ou falso (true/false). Elas são muito úteis quando precisamos fazer comparações ou tomar decisões.
Exemplo: é_maior_de_idade = True

## Como dar nome às variáveis?

1. *** Os nomes não podem começar com números: *** Por exemplo, 1idade está errado, mas idade1 está certo.
2. *** Os nomes não podem ter espaços: *** Se você quiser usar mais de uma palavra, pode usar um underline (_) para separá-las. Exemplo: primeiro_nome.
3. *** Os nomes são sensíveis a maiúsculas e minúsculas: *** Isso significa que idade e Idade são variáveis diferentes.
Escolha nomes que façam sentido: É importante que o nome da variável tenha a ver com o que ela guarda. Não é uma boa ideia chamar uma variável de x se ela está guardando a idade de alguém. Prefira nomes como idade.

# Exemplo de como usar variáveis
Imagine que em Programelândia você tem uma missão: descobrir se uma pessoa pode votar. Para isso, você precisa guardar a idade da pessoa e comparar com a idade mínima para votar, que é 18 anos.

Aqui está o plano usando variáveis:
``` bash 

let idade = 20;  // Cria uma variável chamada "idade" e coloca o valor 20 nela.
const idadeMinimaParaVotar = 18;  // Cria uma constante com a idade mínima para votar.

let podeVotar = idade >= idadeMinimaParaVotar;  // Compara a idade da pessoa com a idade mínima.

console.log(podeVotar);  // Isso vai imprimir "true", porque 20 é maior que 18.


```

# Constantes x Variáveis
Dentro de um algoritmo podemos encontrar basicamente duas classes diferentes de​ dados, os dados constantes e os variáveis

*** Contantes *** – seu valor não se altera ao longo do tempo em que o algoritmo é executado, ou seja, permanece o mesmo desde o início até o final da execução.

*** Variável *** - pode ter seu valor alterado durante a​ execução do programa

# Quando usar variáveis e quando usar constantes?
Variáveis são úteis quando você sabe que o valor pode mudar ao longo do programa. Por exemplo, a idade de uma pessoa, a pontuação de um jogo, ou qualquer dado que pode ser atualizado.

Constantes são usadas quando você tem um valor que não vai mudar nunca. Por exemplo, o número de dias em uma semana, a idade mínima para votar, ou a velocidade da luz.

## Exemplo completo:
Aqui está um exemplo que mistura os dois:

``` bash 
let nome = "Ana";  // A variável 'nome' pode mudar.
const idadeMinimaParaVotar = 18;  // A constante 'idadeMinimaParaVotar' não muda.

let idade = 16;  // A idade da pessoa pode mudar.

if (idade >= idadeMinimaParaVotar) {
    console.log(nome + " pode votar.");
} else {
    console.log(nome + " ainda não pode votar.");
}



```