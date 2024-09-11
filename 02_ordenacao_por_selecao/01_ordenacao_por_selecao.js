"use strict";

// O código implementa a Ordenação por Seleção, onde repetidamente encontra o menor elemento no array (usando encontrarMenorIndice), remove-o do array original e o coloca em um novo array (arrayOrdenado). Ao final, o array original é mantido inalterado, e o novo array contém os elementos em ordem crescente.

// Encontrando o menor elemento em um array e retornando seu indice
function encontrarMenorIndice(array){
    
    // Define o primeiro elemento do array como o menor.
    let menorElemento = array[0];

    // Define o índice do primeiro elemento como o índice do menor valor.
    let menorIndice = 0;

    // A partir do segundo elemento (índice 1) até o fim do array (for (let i = 1; i < array.length; i++)), a função compara cada elemento com o atual menorElemento.
    // Se algum elemento (array[i]) for menor que o menorElemento, ele atualiza o menorElemento com esse valor, e menorIndice passa a ser o índice desse novo menor valor.
    for (let i = 1; i < array.length; i++) {
    
        if (array[i] < menorElemento) {
            menorElemento = array[i];
            menorIndice = i;
        }
    }

    // Retorna o indice do menor elemento
    return menorIndice;
}

function ordenacaoPorSelecao(array){
    
    // Cria um array vazio para armazenar os elementos ordenados.
    let arrayOrdenado = [];

    // Cria uma cópia do array original, já que o método splice vai modificar o array original e isso não é desejado.
    let arrayCopia = array.slice();

    // Salva o comprimento do array original para iterar.
    let comprimento = array.length;

    for (let i = 0; i < comprimento; i++) {
    
        // Encontra o indice do menor elemento do arrayCopia 
        let menorIndice = encontrarMenorIndice(arrayCopia);

        // O método splice remove o elemento no índice especificado e retorna um array com os elementos removidos. O [0] serve para pegar o valor diretamente, já que splice retorna um array.
        arrayOrdenado.push(arrayCopia.splice(menorIndice, 1)[0]);
    }

    // Retorna o array ordenado de forma crescente
    return arrayOrdenado;
}

const array = [5, 3, 6, 2, 10];
const arrayOrdenado = ordenacaoPorSelecao(array);

console.log("Array original - ", array); // [5, 3, 6, 2, 10]
console.log("Array ordenado - ", arrayOrdenado); // [2, 3, 5, 6, 10]
