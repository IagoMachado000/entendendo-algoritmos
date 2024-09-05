"use strict";

/**
 * Exemplo do algoritmo de pesquisa binária
 * @param {Array} lista 
 * @param {number} item 
 * @returns {(number|null)}
 * Se o item está no array, a função retorna a sua posição
 */

function pesquisaBinaria(lista, item){
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        // A cada tentativa, testamos o elemento centro da lista
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute == item) {
            return meio;
        } else if(chute > item){
            // Se o chute é maior, atualizamos a variável alto
            alto = meio - 1;
        } else {
            // Se o chute é menor, atualizamos a variável baixo
            baixo = meio + 1;
        }
    }

    return null;
}

const minhaLista = [1, 3, 5, 7, 9];

console.log(pesquisaBinaria(minhaLista, 3));
console.log(pesquisaBinaria(minhaLista, -1));
