# Entendendo algoritmos

## Anotações sobre a leitura do livro Entendendo algoritimos - um guia ilustrado para programadores e outros curiosos

## Capítulo 1 - Introdução a algoritmos
- O que é um algoritmo?
    - **Um algoritmo é um conjunto de instruções que realizam uma tarefa**

### Pesquisa Binária

- Problemas relacionados a busca de um dado usam o algoritmo de **pesquisa binária**

- A entrada para o algoritmo de pesquisa binaria **deve** ser uma **lista ordenada** de elementos

- Caso o elemento buscado esteja na lista, sua **posição é retornada**, caso não, o retorno é none

- Com a pesquisa binária, a cada iteração, eliminamos metade das opções, até restar apenas 1

- Para uma pesquisa de n números, a pesquisa binária precisa de log₂n para retornar o valor correto, enquanto a pesquisa simples precisa de n etapas
    ```
        lista de 8 elementos:
        pesquisa binária -> log₂8 = 3 (Para uma lista de 8 elementos, no pior dos casos precisaríamos de no máximo 3 tentativas)
        
        pesquisa simples - Para uma lista de 8 elementos, no pior dos casos precisaríamos de no máximo 8 tentativas

        lista de 1024 elementos:
        pesquisa binária -> log₂1024 = 10 (Para uma lista de 1024 elementos, no pior dos casos precisaríamos de no máximo 10 tentativas)
        
        pesquisa simples - Para uma lista de 1024 elementos, no pior dos casos precisaríamos de no máximo 1024 tentativas
    ```

- Exercícios
    ```
        1.1 - Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?
            log₂128 = 7 
            Precisaríamos de no máximo 7 tentativas

        1.2 - Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?
            log₂256 = 8
            Precisaríamos de no máximo 8 tentativas
    ```

### Tempo de execução

- Pesquisa simples tem o número máximo de tentativas igual ao tamanho da lista (tempo linear O(n))

- Pesquisa binária tem o número máximo de tentativas igual a log₂n (n = tamanho da lista) (tempo logarítmico O(log n))

### Notação Big O

- É uma notação que diz o quão rápido é um algoritmo

- **O tempo de execução de algoritmos crescem com velocidades diferentes**

- Mas a notação Big O não informa o tempo em segundos, ela permite que comparemos o número de operações, ou seja, o quão rápido um algoritmo cresce

- E estabelece o tempo de execução para a pior hipótese

- Exemplos comuns de tempo de execução Big O do mais rápido para o mais lento
    - O(log n), também conhecido como tempo logarítmico. Exemplo: pesquisa binária (tempo logarítmico).

    - O(n), conhecido como tempo linear. Exemplo: pesquisa simples (tempo linear).

    - O(n * log n). Exemplo: um algoritmo rápido de ordenação, como a ordenação quicksort.

    - O(n2). Exemplo: um algoritmo lento de ordenação, como a ordenação por seleção.

    - O(n!). Exemplo: um algoritmo bastante lento, como o do caixeiro-viajante (tempo fatorial).


- A rapidez de um algoritmo não é medida em segundos, mas pelo crescimento do número de operações.

- Em vez disso, discutimos sobre o quão rapidamente o tempo de execução de um algoritmo aumenta conforme o número de elementos aumenta.

- O tempo de execução em algoritmos é expresso na notação Big O.

- O(log n) é mais rápido do que O(n), e O(log n) ca ainda mais rápido conforme a lista aumenta.

- Exercícios
    ```
        1.3 - Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica.
            O(log n)

        1.4 - Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica. (Dica: Deve procurar pela agenda inteira!)
            O(n)

        1.5 - Você quer ler o número de cada pessoa da agenda telefônica.
            O(n)

        1.6 - Você quer ler os números apenas dos nomes que começam com A. (Isso é complicado! Esse algoritmo envolve conceitos que são abordados mais profundamente no Capítulo 4. Leia a resposta – você ficará surpreso!)
            O(n)
    ```

### Caixeiro-viajante

- Nesse exemplo, um viajante deseja visitar 5 cidades e quer encontra a menor distância para isso, ou seja, ele precisa analisar cada ordem possível de cidades para visitar.

- Como são 5 cidades, temos um total de 120 operações (5! = 120 -> 5x4x3x2x1 = 120)

- Agora para 6 cidades, precisa-se de 720 operações e para 7 cidades, 5.050 operações

- Ou seja, de maneira geral, para n itens, é necessário n! (fatorial de n) operações para chegar ao resultado (tempo de execução O(n!))

## Capítulo 2 - Ordenação por seleção

- Arrays e listas encadeadas
    - Arrays
        - Arrays armazenam valores contiguamente, ou seja, um do lado do outro na memória

        - Como arrays armazenam valores um do lado do outro, quando precisamos adicionar novos elementos ao array, ele é movido e realocado em um espaço de memoria onde caibam todos os itens um ao lado do outro e isso sempre acontece quando adicionamos novos elementos ao array

        - Esse processo torna a adição de novos itens ao array, lento, mas para para resolver isso, podemos reservar espaços na memória, por exemplo, podemos reservar 10 espaços na memória, e o array só seria movido quando fosse adicionado o 11º valor. Contudo, essa prática gera outros problemas

        - Nem sempre usaremos todo o espaço alocado para o array, dessa forma a memória será desperdiçada, pois ninguém mais poderá usar esse espaço al-ocado para o array

        - Se precisarmos adicionar mais itens do que o espaço alocado, o array precisará ser movido

        - Arrays são ótimos se precisarmos ler elementos aleatórios, pois como esses elementos são armazenados sempre um ao lado do outro, sabemos o endereço de cada item do array, ou seja, podemos encontrar qualquer elemento de um array instantaneamente

    - Listas encadeadas
        - Nas listas encadeadas, os itens são armazenados em locais aleatórios da memória, onde cada item armazena o endereço do item seguinte

        - Dessa forma, armazenar novos itens a uma lista encadeada é muito fácil, o novo item é armazenado em qualquer lugar da memória e guarda o endereço do item anterior

        - Ou seja, com listas encadeadas nunca precisamos mover os itens do array

        - Contudo, listas encadeadas tem um problema relacionado a leitura dos itens, De forma que, se precisarmos ler o último item, não conseguimos fazer isso, a não ser que lermos item após item começando do primeiro, pois cada item armazena o endereço do item seguinte. Ou seja, precisamos ler o item 1 para conseguir o endereço do item 2 e assim por diante até o último item

        - Assim, listas encadeadas são ótimas para quando precisamos ler um item após o outros, mas se precisamos pular de um item para o outros, a lista encadeada é horrível

    - Tempo de execução para operações comuns de arrays e listas
        ```
            |         | Leitura | Escrita |
            | Leitura | O(1)    | O(n)    |
            | Escrita | O(n)    | O(1)    |
            *O(n) = tempo de execução linear
            *O(1) = tempo de execução constante
        ```

    - Exercícios
        ```
            2.1 - Suponha que você esteja criando um aplicativo para acompanhar as suas finanças. Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?
                Nesse caso, onde temos muitas operações de inserção de itens e poucas operações de leitura, a melhor opção seria o uso de uma lista encadeada.  

                * Array tem leitura rápida e inserção lenta

                * Lista encadeadas tem leitura lenta e inserção rápida. Contudo, a leitura de uma lista encadeada só se mostra lenta quando precisamos ler itens aleatórios, mas quando lemos todos os itens da lista, a lista encadeada terá também uma boa velocidade de leitura 
        ```

- Inserindo algo no meio da lista