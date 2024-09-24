"use strict";

// Função para calcular o fatorial de um número

// Pilha de chamada (call stack) com recursão

function fatorial(x){
    if (x == 1) {
        return 1;
    }else{
        return x * fatorial(x - 1);
    }
}

let fat = 5
console.log('fatorial de ' + fat + ' = ' + fatorial(fat));