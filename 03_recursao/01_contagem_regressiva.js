"use strict";

// Função recursiva pra contagem regressiva

// Loop infinito - essa função, ao ser chamada, como não tem um caso-base, entrará em um loop infinito
function contagemRegressivaLoopInfinito(i){
    console.log(i);
    contagemRegressivaLoopInfinito(i - 1);
}

//contagemRegressivaLoopInfinito(5)

// Agora, com o caso-base (ponto de parada) a função não entra em loop infinito
function contagemRegressiva(i){
    console.log(i);

    // Caso-base: é quando a função deixa de chamar a sí mesma
    if (i <= 1) {
        return;
    }else{
        // Caso recursivo
        contagemRegressiva(i - 1);
    }
}

contagemRegressiva(5);