"use strict";

// A busca binária reduz a área de pesquisa pela metade a cada passo, tornando-a muito mais eficiente que a busca linear em listas grandes. No entanto, é importante que a lista esteja ordenada para que o algoritmo funcione corretamente.

function pesquisaBinaria(lista, item){
    // Define o índice inicial (primeiro elemento) da lista como "baixo"
    let baixo = 0;

    // Define o índice final (último elemento) da lista como "alto"
    let alto = lista.length - 1;

    // A ideia é dividir a lista em partes menores repetidamente. O loop continua enquanto baixo for menor ou igual a alto (enquanto ainda houver partes da lista para procurar)
    while (baixo <= alto) {

        // Calcula o índice do meio: let meio = Math.floor((baixo + alto) / 2); Divide a lista ao meio e arredonda o índice para baixo.
        let meio = Math.floor((baixo + alto) / 2);

        // let chute = lista[meio]; O valor no índice meio da lista é o "chute"
        let chute = lista[meio];

        if (chute == item) {
            // Se o chute == item, o algoritmo retorna o índice meio, onde o item foi encontrado.
            return meio;

        } else if(chute > item){
            // Se chute > item, o algoritmo ajusta o valor de alto para meio - 1, pois o item deve estar na metade inferior da lista.
            alto = meio - 1;

        } else {
            // Se chute < item, o algoritmo ajusta o valor de baixo para meio + 1, pois o item deve estar na metade superior da lista.
            baixo = meio + 1;
        }
    }

    return null;
}

const minhaLista = [1, 3, 5, 7, 9];

console.log(pesquisaBinaria(minhaLista, 3));
console.log(pesquisaBinaria(minhaLista, -1));
